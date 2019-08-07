module.exports = class Card {
  constructor(id, name, type, stars, atk, def, description, img) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.stars = stars;
    this.atk = atk;
    this.def = def;
    this.description = description;  
    this.img = img;  
  }
}
