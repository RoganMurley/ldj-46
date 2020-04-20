import Camera from '../components/Camera.js';
import gameRoom from '../rooms/game.js';

import extinctionSfxUrl from '../sounds/extinction.wav';

const textColor = 0xA00404;


export default class GameOverSystem {
  constructor(width, height, world, soundSystem, controlsSystem, roomSystem, goalSystem) {
    this.$tracking = {
      beast: 'many',
      villager: 'many',
      followCamera: 'single',
    };
    this.ended = false;
    this.ready = false;

    this.tickStart = dt => {
      if (this.ended) {
        if (this.ready && controlsSystem.check('start')) {
          goalSystem.paused = false;
          goalSystem.time = 0;
          roomSystem.saveRoom('game', gameRoom(width, height));
          roomSystem.loadRoom('game');
          this.ended = false;
          this.ready = false;
        }
        return;
      };
      if (!Object.values(this.$tracked.beast).length) {
        this.gameOver("Your friends are lonely now.");
      }
      if (!Object.values(this.$tracked.villager).length) {
        this.gameOver("You're lonely now.");
      }
    };
    this.gameOver = (extinctCreature) => {
      world.add(new hitagi.Entity()
        .attach(new hitagi.components.graphics.Graphic({
          z: 100,
          relative: false,
          translate: {
            x: width * 0.5,
            y: height * 0.45
          },
        }))
        .attach(new hitagi.components.graphics.Text({
          copy: 'BAD BEAST',
          style: {
            font: '64px Sans-Serif',
            fill: textColor,
          },
        }))
      );

      world.add(new hitagi.Entity()
        .attach(new hitagi.components.graphics.Graphic({
          z: 100,
          relative: false,
          translate: {
            x: width * 0.5,
            y: height * 0.6
          },
        }))
        .attach(new hitagi.components.graphics.Text({
          copy: extinctCreature,
          style: {
            font: '32px Sans-Serif',
            fill: textColor,
          },
        }))
      );

      soundSystem.play(extinctionSfxUrl);
      this.ended = true;
      this.$tracked.followCamera.c.followCamera.shake.x += 20;
      this.$tracked.followCamera.c.followCamera.shake.y += 20;
      goalSystem.paused = true;

      setTimeout(
        () => {this.ready = true;},
        2000,
      );
    };
  }
}
