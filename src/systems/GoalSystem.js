export default class GoalSystem {
  constructor() {
    this.$tracking = {
      score: 'single',
      friends: 'single',
      villager: 'many',
    };

    this.time = 0;
    this.paused = false;

    this.bestTime = 0;
    this.bestFriends = 0;
    if (window.localStorage) {
      const savedTime = window.localStorage['bestTime'];
      if (savedTime) {
        this.bestTime = savedTime;
      }
      const savedFriends = window.localStorage['bestFriends'];
      if (savedFriends) {
        this.bestFriends = savedFriends;
      }
    }

    this.tickStart = (dt) => {
      if (this.paused || !this.$tracked.score || !this.$tracked.villager) {
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

      const friendCount = Object.values(this.$tracked.villager).length;
      if (friendCount === 1) {
        this.$tracked.friends.c.text.copy = `${friendCount} friend`;
      } else {
        this.$tracked.friends.c.text.copy = `${friendCount} friends`;
      }
      this.$tracked.friends.c.text.color = 0xfff; // bugfix

      if (window.localStorage) {
        if (days > this.bestTime) {
          window.localStorage.setItem('bestTime', days);
          this.bestTime = days;
        }
        if (friendCount > this.bestFriends) {
          window.localStorage.setItem('bestFriends', friendCount);
          this.bestFriends = friendCount;
        }
      }
    };

  }
}
