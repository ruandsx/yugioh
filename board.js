module.exports = class Board {
  constructor(p1, p2) {
    this.board = { 
      0: "", 1: "", 2: "", 3: "", 4: "",
      5: "", 6: "", 7: "", 8: "", 9: "",

      10: "", 11: "", 12: "", 13: "", 14: "",
      15: "", 16: "", 17: "", 18: "", 19: "",
    };
    this.p1 = p1;
    this.p2 = p2;
  }
  fillBoard(){
    for (let i = 0; i < 20; i++) {
      if(i>=10){
        this.board[i] = this.p2.deck.cards[i]; 
      }else{
        this.board[i] = this.p1.deck.cards[i];
      }
      
    }
  }
  printBoard(){
    console.log("HP p1: "+this.p1.life)
    for(let i=0;i<20;i++){
      if(i%5==0 && i%10==0 && i!=0){
        process.stdout.write("\n\n\n")
      }else if(i%5==0 && i%10!=0){
        process.stdout.write("\n")
      }
  
      if(this.board[i]==""){
        process.stdout.write("   | VAZIO |   ")
      }else{
        process.stdout.write("   | " + this.board[i].stars + " |   ")
      }
    }
    console.log("\nHP p2: "+this.p2.life)
  }
}