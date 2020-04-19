import {distance, moveTo} from '../utils.js';


export default class FearSystem {
  constructor () {
    this.$tracking = {
      beast: 'single',
    };

    this.update = {
      villager: (entity, dt) => {
        const {position} = entity.c;
        let speed = 0;
        const beast = this.$tracked.beast;
        const beastPosition = beast ? this.$tracked.beast.c.position : position;
        if (distance(position, beastPosition) < 240) {
          speed = -50;
        }
        moveTo(entity, beastPosition, speed)
      },
    };
  }
}
