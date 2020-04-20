export default class GoalSystem {
  constructor() {
    this.$tracking = {
      score: 'single',
      friends: 'single',
    };

    this.time = 0;
    this.friendCount = 4;
    this.paused = false;

    this.tickStart = (dt) => {
      if (this.paused) {
        return;
      }
      this.time += dt;
      const days = Math.floor(this.time / 3000);
      if (days === 1) {
        this.$tracked.score.c.text.copy = `${days} day of friendship`;
      } else {
        this.$tracked.score.c.text.copy = `${days} days of friendship`;
      }
      this.$tracked.score.c.text.color = 0xfff; // bugfix


      if (this.friendCount === 1) {
        this.$tracked.friends.c.text.copy = `${this.friendCount} friend`;
      } else {
        this.$tracked.friends.c.text.copy = `${this.friendCount} friends`;
      }
      this.$tracked.friends.c.text.color = 0xfff; // bugfix
    };

    this.build = {
      villager: (entity) => {
        this.friendCount++;
      }
    };

    this.destroy = {
      villager: (entity) => {
        this.friendCount--;
      }
    };
  }
}
