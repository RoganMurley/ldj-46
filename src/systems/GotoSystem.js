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

        velocity.yspeed *= 0.99;
        const distance = {
          x: Math.abs(position.x - goto.x),
          y: Math.abs(position.y - goto.y),
        };
        if (distance.x < 200) {
          velocity.xspeed /= (distance.x * 0.01);
        }
        if (distance.y < 200) {
          velocity.yspeed /= (distance.y * 0.01);
        }

        if (distance.x < 10) {
          velocity.xspeed = 0;
        }
        if (distance.y < 10) {
          velocity.yspeed = 0;
        }
      },
    };
  }
}
