const game = {
  lives: 3,
  coins: 0,
  get points() {
    let point = this;
    point.coins = 2;

    console.log(`points= ${this.coins * 10}`);
  },
  playerDies: function () {
    let chance = this;
    if (this.lives !== 0) {
      chance.lives = this.lives - 1;
      chance.coins = 0;
      return console.log(game);
    }
  },
  newGame: function () {
    let newValue = this;
    if (this.lives) {
      newValue.lives = 3;
      newValue.coins = 0;
      return console.log(game);
    }
  },
};
console.log(game);
game.points;
game.playerDies();
game.playerDies();
game.newGame();
