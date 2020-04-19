export default class Villager {
  constructor(params) {
    this.$id = 'villager';
    this.deps = ['velocity', 'sprite'];
    this.hunger = 100;
    this.size = params.size;
    this.busy = params.busy;
  }
}
