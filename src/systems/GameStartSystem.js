export default class GameStartSystem {
  constructor (controlsSystem, startGame) {
    controlsSystem.bind('m1', 'start');

    this.update = {
      'gameStartListener': () => {
        if (controlsSystem.check('start')) {
          startGame();
        };
      },
    };
  }
}
