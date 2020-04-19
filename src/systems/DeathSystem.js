import Blood from '../entities/Blood.js';

import deathSfxUrl from '../sounds/death.wav';


export default class DeathSystem {
  constructor (collisionSystem, soundSystem) {
    this.$tracking = {
      followCamera: 'single',
    };
    this.update = {
      weed: (entity, dt) => {
        const villagerHit = collisionSystem.collide(entity, 'villager').length;
        const beastHit = collisionSystem.collide(entity, 'beast').length;
        if (villagerHit || beastHit) {
          entity.world.remove(entity);
          if (beastHit) {
            this.$tracked.followCamera.c.followCamera.shake.x += 3;
            this.$tracked.followCamera.c.followCamera.shake.y += 3;
          }
        }
      },

      villager: (entity, dt) => {
        if (collisionSystem.collide(entity, 'beast').length) {
          entity.world.remove(entity);
          const {position, villager} = entity.c;
          entity.world.add(new Blood({
            remaining: 60000,
            size: villager.size,
            ...position,
          }));
          soundSystem.play(deathSfxUrl);
          this.$tracked.followCamera.c.followCamera.shake.x += 10;
          this.$tracked.followCamera.c.followCamera.shake.y += 10;
        }
      },

    };
  }
}
