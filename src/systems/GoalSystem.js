export default class GoalSystem {
  constructor() {
    this.$tracking = {
      beast: 'many',
      bush: 'many',
      weed: 'many',
      villager: 'many',
    };

    this.goals = {
      biped: {
        tiny: 0,
        smoll: 0,
        big: 0,
        giant: 0,
      },
    };

    this.build = {
      villager: (entity, dt) => {
        const {size} = entity.c.villager;
        if (size > 2) {
          console.log('Breed a giant bidep');
          this.goals.biped.giant++;
        }
        if (size > 1.5) {
          console.log('Breed a big bidep');
          this.goals.biped.big++;
        }
        if (size < 0.6) {
          console.log('Breed a smoll biped');
          this.goals.biped.smoll++;
        }
        if (size < 0.4) {
          console.log('Breed a tiny biped');
          this.goals.biped.tiny++;
        }
      }
    };
  }
}
