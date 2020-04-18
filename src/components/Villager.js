export default class Villager {
  constructor({size}) {
    this.$id = 'villager';
    this.deps = ['velocity', 'sprite'];
    this.hunger = 100;
    this.size = size;
  }
}
