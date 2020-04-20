import Bush from '../entities/Bush.js';
import Villager from '../entities/Villager.js';
import Weed from '../entities/Weed.js';
import {distance} from '../utils.js';

import spawnSfxUrl from '../sounds/spawn.wav';


export default class ProcreationSystem {
  constructor(world, soundSystem) {
    this.update = {
      bush: (entity, dt) => {
        this.procreate(
          0.0005,
          entity.c.position,
          entity.c.bush.size * 0.5,
          Bush,
        );
      },
      villager: (entity, dt) => {
        if (entity.c.hunger.current < entity.c.hunger.max * 0.5) {
          return;
        }
        this.procreate(
          0.0005,
          entity.c.position,
          entity.c.villager.size,
          Villager,
      );
      },
      weed: (entity, dt) => {
        this.procreate(
          0.00005,
          entity.c.position,
          entity.c.weed.size,
          Weed,
        );
      },
    };
    this.procreate = (probability, position, initialSize, cls) => {
      if (Math.random() < 0.0005) {
        const x = position.x + 200 * (Math.random() - 0.5);
        const y = position.y + 200 * (Math.random() - 0.5);
        const size = initialSize * (1 + 0.5 * (Math.random() - 0.5));
        world.add(new cls({x, y, size}));
        soundSystem.play(spawnSfxUrl);
      }
    };
  }
}
