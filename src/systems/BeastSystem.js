import Blood from '../entities/Blood.js';

import deathSfxUrl from '../sounds/death.wav';


const ANIMATION_SPEED = 0.08;

export default class BeastSystem {
  constructor (world, controlsSystem, collisionSystem, soundSystem) {
    controlsSystem.bind('m1', 'move');

    this.update = {
      beast: (entity, dt) => {
        const {goto, graphic, position, sprite, velocity} = entity.c;

        // Graphics
        sprite.animationSpeed = 0;
        if (velocity.xspeed < 0) {
          graphic.scale.x = 1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }
        else if (velocity.xspeed > 0) {
          graphic.scale.x = -1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }

        // Controls
        if (controlsSystem.check('move')) {
          const mousePos = controlsSystem.cameraGetMousePos();
          goto.x = mousePos.x;
          goto.y = mousePos.y;

          const speed = 200;
          const diffX = Math.abs(position.x - goto.x);
          const diffY = Math.abs(position.y - goto.y);
          let speedX = speed;
          let speedY = speed;

          if (diffX > diffY) {
            speedY *= (diffY / diffX);
          } else {
            speedX *= (diffX / diffY);
          }

          goto.xspeed = speedX;
          goto.yspeed = speedY;
        }

        // Collisions
        {
          const test = collisionSystem.collide(entity, 'villager');
          test.forEach(villager => {
            world.remove(villager);
            const {position} = villager.c;
            world.add(new Blood({
              remaining: 60000,
              size: villager.c.villager.size,
              ...position,
            }));
            soundSystem.play(deathSfxUrl);
          });
        }

        {
          const test = collisionSystem.collide(entity, 'weed');
          test.forEach(weed => {
            world.remove(weed);
          });
        }
      },
    };
  }
}
