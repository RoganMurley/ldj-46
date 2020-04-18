const ANIMATION_SPEED = 0.08;

export default class BeastSystem {
  constructor (controlsSystem) {
    controlsSystem.bind('m1', 'move');

    this.update = {
      beast: (entity, dt) => {
        const {goto, graphic, sprite, velocity} = entity.c;

        // Graphics
        sprite.animationSpeed = 0;
        if (velocity.xspeed < 0) {
          graphic.scale.x = 1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }
        else if (velocity.xspeed > 0) {
          graphic.scale.x = -1;
          sprite.animationSpeed = ANIMATION_SPEED;
        }

        // Controls
        if (controlsSystem.check('move')) {
          const mousePos = controlsSystem.getMousePos();
          goto.x = mousePos.x;
          goto.y = mousePos.y;
          goto.xspeed = 200;
          goto.yspeed = 200;
        }
      },
    };
  }
}
