import Bush from '../entities/Bush.js';
import Villager from '../entities/Villager.js';
import {distance} from '../utils.js';


export default class ProcreationSystem {
  constructor () {
    this.$tracking = {
      villager: 'many',
      bush: 'many',
    };

    this.update = {
      bush: (entity, dt) => {
        const {position} = entity.c;

        if (Math.random() < 0.0005) {
          const x = position.x + 200 * (Math.random() - 0.5);
          const y = position.y + 200 * (Math.random() - 0.5);
          entity.world.add(new Bush({x, y}));
        }
      },
      villager: (entity, dt) => {
        const {position} = entity.c;

        if (Math.random() < 0.0005) {
          const x = position.x + 200 * (Math.random() - 0.5);
          const y = position.y + 200 * (Math.random() - 0.5);
          entity.world.add(new Villager({x, y}));
        }
      },
    };
  }
}
