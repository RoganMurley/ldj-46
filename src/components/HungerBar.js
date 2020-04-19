export default class HungerBar {
  constructor(params) {
    this.$id = 'hungerBar';
    this.deps = ['collision', 'rectangle'];
    this.followId = params.followId;
    this.offsetY = params.offsetY;
  }
}
