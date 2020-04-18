import css from './style.css';
import hitagi from 'hitagi';

import titleRoom from './rooms/title.js';
import gameRoom from './rooms/game.js';

import GameStartSystem from './systems/gameStart.js';

import beast1ImgUrl from './sprites/beast-1.png';
import beast2ImgUrl from './sprites/beast-2.png';

const width = window.innerWidth;
const height = window.innerHeight;

const world = new hitagi.World();

const renderSystem = new hitagi.systems.PixiRenderSystem({width: window.innerWidth, height: window.innerHeight});
world.register(renderSystem);

const roomSystem = new hitagi.systems.RoomSystem(world);
world.register(roomSystem);

const controlsSystem = new hitagi.systems.ControlsSystem();
world.register(controlsSystem);

const gameStartSystem = new GameStartSystem(
  controlsSystem,
  () => roomSystem.loadRoom('game'),
);
world.register(gameStartSystem);

document.body.appendChild(renderSystem.view);

renderSystem.load(
  [
    beast1ImgUrl,
    beast2ImgUrl,
  ],
  main,
);

function main() {
  // Setup rooms.
  roomSystem.saveRoom('title', titleRoom(width, height));
  roomSystem.saveRoom('game', gameRoom(width, height));
  roomSystem.loadRoom('title');

  // Setup controls.
  controlsSystem.bind('m1', 'start');

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
