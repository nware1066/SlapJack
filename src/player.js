class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  pickCard() {
    var playedCard = this.hand.pop();
    if (playedCard) {
      return playedCard;
    }
  }

  saveWins(){
    var stringifiedPlayerWinCount = JSON.stringify(`Wins ${this.wins}`);
    // var stringifiedPlayer2WinCount = JSON.stringify(player2winCount);
      localStorage.setItem("playerWinCount", stringifiedPlayerWinCount);
      // localStorage.setItem("player2WinCount", stringifiedPlayer2WinCount);
    // increment and add win to local storage
  }
}
