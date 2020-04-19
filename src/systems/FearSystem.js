import {distance} from '../utils.js';


export default class FearSystem {
  constructor () {
    this.$tracking = {
      beast: 'single',
    };

    this.update = {
      villager: (entity, dt) => {
        const {goto, graphic, position, sprite, velocity} = entity.c;

        let speed = 0;
        const beast = this.$tracked.beast;
        const beastPosition = beast ? this.$tracked.beast.c.position : position;
        if (distance(position, beastPosition) < 240) {
          speed = -50;
        }
        goto.x = beastPosition.x;
        goto.y = beastPosition.y;

        const diffX = Math.abs(position.x - goto.x);
        const diffY = Math.abs(position.y - goto.y);
        let speedX = speed;
        let speedY = speed;

        if (diffX > diffY) {
          speedY *= (diffY / diffX);
        } else {
          speedX *= (diffX / diffY);
        }

        goto.xspeed = speedX;
        goto.yspeed = speedY;
      },
    };
  }
}
