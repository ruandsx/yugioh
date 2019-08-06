const Card = require('./card.js');

module.exports = class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
    this.life = 8000;
    this.hand;
  }
}