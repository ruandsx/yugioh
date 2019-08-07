const Deck = require('./deck.js');
const Player = require('./player.js');
const Board = require('./board.js');

var deck1 = new Deck();
var deck2 = new Deck();

var p1 = new Player("Ruan", deck1);
var p2 = new Player("BOT", deck2);

var board = new Board(p1, p2);

board.fillBoard();
board.printBoard();