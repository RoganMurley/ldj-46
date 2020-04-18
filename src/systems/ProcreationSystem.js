import Bush from '../entities/Bush.js';
import Villager from '../entities/Villager.js';
import Weed from '../entities/Weed.js';
import {distance} from '../utils.js';

import spawnSfxUrl from '../sounds/spawn.wav';


export default class ProcreationSystem {
  constructor(soundSystem) {
    this.update = {
      bush: (entity, dt) => {
        const {position, bush} = entity.c;
        if (Math.random() < 0.0005) {
          const x = position.x + 800 * (Math.random() - 0.5);
          const y = position.y + 800 * (Math.random() - 0.5);
          const size = bush.size + 0.5 * (Math.random() - 0.5);
          entity.world.add(new Bush({x, y, size}));
          soundSystem.play(spawnSfxUrl);
        }
      },
      villager: (entity, dt) => {
        const {position, villager} = entity.c;
        if (Math.random() < 0.0005) {
          const x = position.x + 200 * (Math.random() - 0.5);
          const y = position.y + 200 * (Math.random() - 0.5);
          const size = villager.size + 0.5 * (Math.random() - 0.5);
          entity.world.add(new Villager({x, y, size}));
          soundSystem.play(spawnSfxUrl);
        }
      },
      weed: (entity, dt) => {
        const {position, weed} = entity.c;
        if (Math.random() < 0.0005) {
          const x = position.x + 200 * (Math.random() - 0.5);
          const y = position.y + 200 * (Math.random() - 0.5);
          const size = weed.size + 0.5 * (Math.random() - 0.5);
          entity.world.add(new Weed({x, y, size}));
          soundSystem.play(spawnSfxUrl);
        }
      },
    };
  }
}
