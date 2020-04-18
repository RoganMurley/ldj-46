import css from './style.css';
import hitagi from 'hitagi';

import titleRoom from './rooms/title.js';
import gameRoom from './rooms/game.js';

import GameStartSystem from './systems/GameStartSystem.js';
import BeastSystem from './systems/BeastSystem.js';
import GotoSystem from './systems/GotoSystem.js';
import VillagerSystem from './systems/VillagerSystem.js';
import FearSystem from './systems/FearSystem.js';

import bushImgUrl from './sprites/bush.png';
import beast1ImgUrl from './sprites/beast-1.png';
import beast2ImgUrl from './sprites/beast-2.png';
import villager1ImgUrl from './sprites/villager-1.png';
import villager2ImgUrl from './sprites/villager-2.png';
import weedImgUrl from './sprites/weed.png';

const width = window.innerWidth;
const height = window.innerHeight;

const world = new hitagi.World();

const renderSystem = new hitagi.systems.PixiRenderSystem({width: window.innerWidth, height: window.innerHeight});
world.register(renderSystem);

const roomSystem = new hitagi.systems.RoomSystem(world);
world.register(roomSystem);

const controlsSystem = new hitagi.systems.ControlsSystem();
world.register(controlsSystem);

const velocitySystem = new hitagi.systems.VelocitySystem();
world.register(velocitySystem);

const gameStartSystem = new GameStartSystem(
  controlsSystem,
  () => {
    roomSystem.loadRoom('game');
    world.deregister(gameStartSystem);

    const gotoSystem = new GotoSystem();
    world.register(gotoSystem);

    const beastSystem = new BeastSystem(controlsSystem);
    world.register(beastSystem);

    const villagerSystem = new VillagerSystem();
    world.register(villagerSystem);

    const fearSystem = new FearSystem();
    world.register(fearSystem);
  },
);
world.register(gameStartSystem);

document.body.appendChild(renderSystem.view);

renderSystem.load(
  [
    bushImgUrl,
    beast1ImgUrl,
    beast2ImgUrl,
    villager1ImgUrl,
    villager2ImgUrl,
    weedImgUrl,
  ],
  main,
);

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
