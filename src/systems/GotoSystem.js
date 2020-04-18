import {distance} from '../utils.js';


export default class GotoSystem {
  constructor () {
    this.update = {
      goto: (entity, dt) => {
        const {goto, position, velocity} = entity.c;
        if (goto.x > position.x) {
          velocity.xspeed = goto.xspeed;
        }
        if (goto.x < position.x) {
          velocity.xspeed = -goto.xspeed;
        }
        if (goto.y > position.y) {
          velocity.yspeed = goto.yspeed;
        }
        if (goto.y < position.y) {
          velocity.yspeed = -goto.yspeed;
        }

        const dist = distance(position, goto);
        if (dist < 200) {
          velocity.xspeed *= 0.99;
        }
        if (dist < 10) {
          velocity.xspeed = 0;
          velocity.yspeed = 0;
        }
      },
    };
  }
}
