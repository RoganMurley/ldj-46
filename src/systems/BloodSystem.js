export default class BloodSystem {
  constructor() {
    this.update = {
      blood: (entity, dt) => {
        const {blood, graphic, sprite} = entity.c;
        graphic.alpha = blood.remaining / blood.maxRemaining;
        graphic.alpha = graphic.alpha * (2 - graphic.alpha); // easing
        blood.remaining -= dt;
        if (blood.remaining < 0) {
          entity.world.remove(entity);
        }
      },
    };
  }
}
