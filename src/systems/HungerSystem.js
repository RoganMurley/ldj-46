import HungerBar from '../entities/HungerBar.js';


export default class HungerSystem {
  constructor () {
    this.$tracking = {
      hunger: 'many',
    };
    this.build = {
      hunger: (entity) => {
        let {x, y} = entity.c.position;
        const offsetY = -0.8 * entity.c.collision.height;
        y += offsetY;
        entity.world.add(
          new HungerBar({
            x,
            y,
            offsetY,
            followId: entity.uid,
          })
        );
      },
    }
    this.update = {
      hunger: (entity, dt) => {
        const {hunger} = entity.c;
        hunger.current -= dt;
        if (hunger.current <= 0) {
          hunger.starved = true;
        } else {
          hunger.starved = false;
        }
      },
      hungerBar: (entity, dt) => {
        const {followId, offsetY} = entity.c.hungerBar;
        const followedEntity = this.$tracked.hunger[followId];
        if (!followedEntity) {
          entity.world.remove(entity);
          return;
        }
        let {x, y} = followedEntity.c.position;
        y += offsetY;
        entity.c.position = {x, y};

        const {hunger} = followedEntity.c;
        const ratio = 32 * hunger.current / hunger.max;
        entity.c.rectangle.width = ratio;
      }
    };
  }
}
