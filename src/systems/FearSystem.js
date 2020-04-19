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
        let beastPosition = beast ? beast.c.position : position;
        beastPosition = {...beastPosition};
        if (distance(position, beastPosition) < 240) {
          villager.busy = 500;
          beastPosition.x += 100 - 200 * Math.random();
          beastPosition.y += 100 - 200 * Math.random();
          moveTo(entity, beastPosition, -50);
        }
      },
    };
  }
}
