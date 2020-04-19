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
        const beastHits = collisionSystem.collide(entity, 'beast');
        const {starved} = entity.c.hunger;
        if (beastHits.length || starved) {
          entity.world.remove(entity);
          const {position, villager} = entity.c;
          entity.world.add(new Blood({
            remaining: 60000,
            size: villager.size,
            ...position,
          }));
          soundSystem.play(deathSfxUrl);
          if (beastHits.length) {
            this.$tracked.followCamera.c.followCamera.shake.x += 10;
            this.$tracked.followCamera.c.followCamera.shake.y += 10;
            const beast = beastHits[0];
            beast.c.hunger.current = beast.c.hunger.max;
          }
        }
      },

      beast: (entity, dt) => {
        const {starved} = entity.c.hunger;
        if (starved) {
          entity.world.remove(entity);
          entity.world.add(new Blood({
            remaining: 60000,
            size: 2,
            ...entity.c.position,
          }));
        }
      },

      bush: (entity, dt) => {
        let scaleFactor = 1.0001;
        const villagerHits = collisionSystem.collide(entity, 'villager');
        villagerHits.forEach((villager) => {
          const {hunger} = villager.c;
          hunger.current = Math.min(hunger.current + 20*dt, hunger.max);
          scaleFactor -= 0.01;
        });
        const {graphic, collision} = entity.c;
        graphic.scale.x *= scaleFactor;
        graphic.scale.y *= scaleFactor;
        collision.width *= scaleFactor;
        collision.height *= scaleFactor;
        if (collision.width < 10) {
          entity.world.remove(entity);
          soundSystem.play(deathSfxUrl);
        }
      },
    };
  }
}
