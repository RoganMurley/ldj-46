import css from './style.css';
import hitagi from 'hitagi';

import titleRoom from './title.js';

const width = window.innerWidth;
const height = window.innerHeight;

const world = new hitagi.World();

const renderSystem = new hitagi.systems.PixiRenderSystem({width: window.innerWidth, height: window.innerHeight});
world.register(renderSystem);

const roomSystem = new hitagi.systems.RoomSystem(world);
world.register(roomSystem);

document.body.appendChild(renderSystem.view);

roomSystem.saveRoom('title', titleRoom(width, height));
roomSystem.loadRoom('title');

requestAnimationFrame(animate);

function animate() {
    // Update the world.
    world.tick(1000/60);

    // Render.
    renderSystem.render();

    // Next frame.
    requestAnimationFrame(animate);
}
