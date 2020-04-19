import extinctionSfxUrl from '../sounds/extinction.wav';


export default class GameOverSystem {
  constructor(width, height, world, soundSystem, controlsSystem, roomSystem) {
    this.$tracking = {
      beast: 'many',
      bush: 'many',
      weed: 'many',
      villager: 'many',
    };
    this.ended = false;
    this.ready = false;

    this.tickStart = dt => {
      if (this.ended) {
        if (this.ready && controlsSystem.check('start')) {
          roomSystem.loadRoom('game');
          this.ended = false;
          this.ready = false;
        }
        return;
      };
      if (!Object.values(this.$tracked.beast).length) {
        this.gameOver('Beast-Gods');
      }
      if (!Object.values(this.$tracked.bush).length) {
        this.gameOver('Bushes');
      }
      if (!Object.values(this.$tracked.weed).length) {
        this.gameOver('Weeds');
      }
      if (!Object.values(this.$tracked.villager).length) {
        this.gameOver('Bipeds');
      }
    };
    this.gameOver = (extinctCreature) => {
      world.add(new hitagi.Entity()
        .attach(new hitagi.components.graphics.Graphic({
          relative: false,
          translate: {
            x: width * 0.5,
            y: height * 0.45
          },
        }))
        .attach(new hitagi.components.graphics.Text({
          copy: 'EXTINCTION EVENT',
          style: {
            font: '64px Sans-Serif',
            fill: 0xDE0002,
          },
        }))
      );

      world.add(new hitagi.Entity()
        .attach(new hitagi.components.graphics.Graphic({
          relative: false,
          translate: {
            x: width * 0.5,
            y: height * 0.6
          },
        }))
        .attach(new hitagi.components.graphics.Text({
          copy: `${extinctCreature} are now extinct`,
          style: {
            font: '32px Sans-Serif',
            fill: 0xDE0002,
          },
        }))
      );
      soundSystem.play(extinctionSfxUrl);
      this.ended = true;

      setTimeout(
        () => {this.ready = true;},
        2000,
      );
    };
  }
}
