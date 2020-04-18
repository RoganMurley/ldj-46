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

        const distance = Math.sqrt(
          Math.pow(position.x - goto.x, 2) + Math.pow(position.y - goto.y, 2)
        );
        if (distance < 200) {
          velocity.xspeed *= 0.99;
        }
        if (distance < 10) {
          velocity.xspeed = 0;
          velocity.yspeed = 0;
        }
      },
    };
  }
}
