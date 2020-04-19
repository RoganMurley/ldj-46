import {distance} from '../utils.js';


const ANIMATION_SPEED = 0.08;

export default class VillagerSystem {
  constructor (collisionSystem) {
    this.update = {
      villager: (entity, dt) => {
        const {goto, graphic, position, sprite, velocity} = entity.c;

        // Graphics
        sprite.animationSpeed = 0;
        if (velocity.xspeed < 0) {
          graphic.scale.x = -1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }
        else if (velocity.xspeed > 0) {
          graphic.scale.x = 1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }
      },
    };
  }
}
