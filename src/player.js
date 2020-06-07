class Player {
  constructor(id, wins) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  pickCard() {
    playedCard = this.hand.pop();
    return playedCard;
  }

  saveWins(){
    // increment and add win to local storage
  }
}
