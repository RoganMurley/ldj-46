import {getNearest, moveTo} from '../utils.js';


const ANIMATION_SPEED = 0.08;

export default class VillagerSystem {
  constructor (collisionSystem) {
    this.$tracking = {
      bush: 'many',
      villager: 'many',
      weed: 'many',
    };
    this.tickStart = (dt) => {
      Object.values(this.$tracked.villager).forEach((entity) => {
        const {villager} = entity.c;
        villager.busy = Math.max(0, villager.busy - dt);
      });
    };
    this.update = {
      villager: (entity, dt) => {
        const {graphic, hunger, position, sprite, velocity, villager} = entity.c;

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

        // Hungry behavior.
        if (!villager.busy && hunger.current < hunger.max * 0.6) {
          const bush = getNearest(entity, Object.values(this.$tracked.bush));
          if (bush) {
            villager.busy += dt;
            moveTo(entity, bush.c.position, 50)            
          }
        }
      },
    };
  }
}
