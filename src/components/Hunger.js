export default class Hunger {
  constructor({current, max, starved}) {
    this.$id = 'hunger';
    this.deps = ['position'];
    this.current = current;
    this.max = max;
    this.starved = starved || false;
  }
}
