import css from './style.css';
import hitagi from 'hitagi';

import titleRoom from './rooms/title.js';
import gameRoom from './rooms/game.js';

import GameStartSystem from './systems/GameStartSystem.js';
import BeastSystem from './systems/BeastSystem.js';
import GotoSystem from './systems/GotoSystem.js';
import VillagerSystem from './systems/VillagerSystem.js';
import FearSystem from './systems/FearSystem.js';
import ProcreationSystem from './systems/ProcreationSystem.js';
import GameOverSystem from './systems/GameOverSystem.js';
import CameraSystem from './systems/CameraSystem.js';
import GoalSystem from './systems/GoalSystem.js';
import BloodSystem from './systems/BloodSystem.js';
import DeathSystem from './systems/DeathSystem.js';
import HungerSystem from './systems/HungerSystem.js';

import bushImgUrl from './sprites/bush.png';
import beast1ImgUrl from './sprites/beast-1.png';
import beast2ImgUrl from './sprites/beast-2.png';
import bloodImgUrl from './sprites/blood.png';
import villager1ImgUrl from './sprites/villager-1.png';
import villager2ImgUrl from './sprites/villager-2.png';
import weedImgUrl from './sprites/weed.png';

import deathSfxUrl from './sounds/death.wav';
import extinctionSfxUrl from './sounds/extinction.wav';
import spawnSfxUrl from './sounds/spawn.wav';

const width = window.innerWidth;
const height = window.innerHeight;

const world = new hitagi.World();

const renderSystem = new hitagi.systems.PixiRenderSystem({width, height});
world.register(renderSystem);

const roomSystem = new hitagi.systems.RoomSystem(world);
world.register(roomSystem);

const controlsSystem = new hitagi.systems.ControlsSystem();
world.register(controlsSystem);

const velocitySystem = new hitagi.systems.VelocitySystem();
world.register(velocitySystem);

const cameraSystem = world.register(new CameraSystem(width, height, renderSystem, controlsSystem));

const soundSystem = new hitagi.systems.SoundSystem();

const gameStartSystem = new GameStartSystem(
  controlsSystem,
  () => {
    roomSystem.loadRoom('game');
    world.deregister(gameStartSystem);

    const collisionSystem = world.register(new hitagi.systems.CollisionSystem());
    world.register(new GotoSystem());
    world.register(new BeastSystem(world, controlsSystem, collisionSystem, soundSystem));
    world.register(new VillagerSystem(collisionSystem));
    world.register(new FearSystem());
    world.register(new ProcreationSystem(world, soundSystem));
    world.register(new GameOverSystem(width, height, world, soundSystem, controlsSystem, roomSystem));
    world.register(new GoalSystem());
    world.register(new BloodSystem());
    world.register(new DeathSystem(collisionSystem, soundSystem));
    world.register(new HungerSystem());
  },
);
world.register(gameStartSystem);

document.body.appendChild(renderSystem.view);

// Loading.
renderSystem.load(
  [
    bushImgUrl,
    beast1ImgUrl,
    beast2ImgUrl,
    bloodImgUrl,
    villager1ImgUrl,
    villager2ImgUrl,
    weedImgUrl,
  ],
  main,
);

soundSystem.load(deathSfxUrl);
soundSystem.load(extinctionSfxUrl);
soundSystem.load(spawnSfxUrl);

function main() {
  // Setup rooms.
  roomSystem.saveRoom('title', titleRoom(width, height));
  roomSystem.saveRoom('game', gameRoom(width, height));
  roomSystem.loadRoom('title');

  // Game loop.
  requestAnimationFrame(animate);
  function animate() {
      // Update the world.
      world.tick(1000/60);

      // Render.
      renderSystem.render();

      // Next frame.
      requestAnimationFrame(animate);
  }
}
