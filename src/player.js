class Player {
  constructor(id) {
    this.id = id;
    this.wins = JSON.parse(localStorage.getItem(`player${this.id}WinCount`)) || 0;
    this.hand = [];
  }

  pickCard() {
    var playedCard = this.hand.pop();
    if (playedCard) {
      return playedCard;
    }
  }

  saveWins() {
    var stringifiedPlayerWinCount = JSON.stringify(this.wins);
    localStorage.setItem(`player${this.id}WinCount`, stringifiedPlayerWinCount);
  }
}
