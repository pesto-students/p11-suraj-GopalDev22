const game = {
  lives: 3,
  coins: 0,
  get points() {
    let points = 0;
    console.log(`points = ${points}`);
    this.coins = 2;
    points = this.coins * 10;
    console.log(`points = ${points}`);
  },
  playerDies: function () {
    if (this.lives > 0) {
      this.lives = this.lives - 1;
      this.coins = 0;
      return this.lives;
    }
  },
  newGame: function () {
    if (!this.lives) {
      this.lives = 3;
      this.coins = 0;
      return console.log(`lives = ${this.lives}\ncoins = ${this.coins}`);
    }
  },
};

console.log(`lives = ${game.lives}\ncoins = ${game.coins}`);
game.points;
console.log(`lives = ${game.playerDies()}`);
game.playerDies();
console.log(`lives = ${game.playerDies()}`);
game.newGame();
