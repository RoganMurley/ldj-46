export default class GameStartSystem {
  constructor (controlsSystem, startGame) {
    this.update = {
      'gameStartListener': () => {
        if (controlsSystem.check('start')) {
          startGame();
        };
      },
    };
  }
}
