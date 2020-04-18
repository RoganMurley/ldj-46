export default class Goto {
  constructor({x, y, xspeed, yspeed}) {
    this.$id = 'goto';
    this.deps = ['velocity'];
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
}
