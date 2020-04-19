import {distance, moveTo} from '../utils.js';


export default class FearSystem {
  constructor () {
    this.$tracking = {
      beast: 'single',
    };

    this.update = {
      villager: (entity, dt) => {
        const {position, villager} = entity.c;
        const beast = this.$tracked.beast;
        const beastPosition = beast ? beast.c.position : position;
        if (distance(position, beastPosition) < 240) {
          villager.busy = true;
          moveTo(entity, beastPosition, -50);
        }
      },
    };
  }
}
