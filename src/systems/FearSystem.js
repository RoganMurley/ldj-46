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
        if (distance(position, this.$tracked.beast.c.position) < 240) {
          speed = -50;
        }
        goto.x = this.$tracked.beast.c.position.x;
        goto.y = this.$tracked.beast.c.position.y;

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
