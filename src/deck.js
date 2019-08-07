const Card = require('./card.js');

module.exports = class Deck {
  constructor() {
    this.cards = this.buildDeck();
  }
  buildDeck(){
    const json = require('../cartas.json');
    
    var cards = {};

    for(let i=0; i<40; i++){
      var num = Math.floor((Math.random() * 10110) + 0);
      while(json[num].atk == undefined || json[num].def == undefined){
        num = Math.floor((Math.random() * 10110) + 0);
      }
      var name = json[num].name;
      var type = json[num].type;
      var atk = json[num].atk;
      var def = json[num].def;
      var level = json[num].level;
      var desc = json[num].desc;
      var img = json[num].card_images[0].image_url;
      cards[i] = new Card("000"+i, name, type, level, atk, def, desc, img);
    }
    return cards
  }
}