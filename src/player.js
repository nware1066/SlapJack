class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  pickCard() {
    var playedCard = this.hand.pop();
    return playedCard;
  }

  saveWins(){
    // increment and add win to local storage
  }
}
