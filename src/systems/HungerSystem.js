export default class HungerSystem {
  constructor () {
    this.update = {
      hunger: (entity, dt) => {
        const {hunger} = entity.c;
        hunger.current -= dt;
        if (hunger.current <= 0) {
          hunger.starved = true;
        } else {
          hunger.starved = false;
        }
      },
    };
  }
}
