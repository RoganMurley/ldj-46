import Blood from '../entities/Blood.js';

import deathSfxUrl from '../sounds/death.wav';


export default class DeathSystem {
  constructor (collisionSystem, soundSystem) {
    this.update = {

      weed: (entity, dt) => {
        if (
          collisionSystem.collide(entity, 'villager').length ||
          collisionSystem.collide(entity, 'beast').length
        ) {
          entity.world.remove(entity);
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
        }
      },

    };
  }
}
