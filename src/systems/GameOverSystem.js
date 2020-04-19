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
        .attach(new hitagi.components.Position({
          x: width * 0.5,
          y: height * 0.45
        }))
        .attach(new hitagi.components.graphics.Graphic())
        .attach(new hitagi.components.graphics.Text({
          copy: 'EXTINCTION EVENT',
          style: {
            font: '5rem Sans-Serif',
            fill: 0xDE0002,
          },
        }))
      );

      world.add(new hitagi.Entity()
        .attach(new hitagi.components.Position({
          x: width * 0.5,
          y: height * 0.55
        }))
        .attach(new hitagi.components.graphics.Graphic())
        .attach(new hitagi.components.graphics.Text({
          copy: `The ${extinctCreature} are extinct`,
          style: {
            font: '2rem Serif',
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
