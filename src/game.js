class Game {
  constructor(currentPlayer) {
    this.player1 = new Player();
    this.player2 = new Player();
    this.currentPlayer = currentPlayer || this.player1;
    this.cardDeck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9];
    this.centerPile = [];
  }

  // when Player instantiates assign keys for deal and slap (or place this in function that validates this)


  shuffleCards() {
    // use Fisher-Yates algorithm to shuffle deck
    var i = this.cardDeck.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = this.cardDeck[j];
      this.cardDeck[j] = this.cardDeck[i];
      this.cardDeck[i] = temp;
    }
  }

  dealCards() {
    this.player1.hand = this.cardDeck.slice(0, 18);
    this.player2.hand = this.cardDeck.slice(18, 40);
}

  changePlayer() {
  
    // change currentPlayer after playCard
  }

  slapCard() {
    // recognize slap keydown for individual player, invoke validating function
  }

  validSlap() {
    // if conditional to determine if slap is valid and move centerPile to appropriate players deck
    // or remove index[0] of players deck and place at the back of opponent's deck
  }

  determineWin() {
    // if playerHand.length === 0, opponent reveals cards one at a time.
    // when a Jack is dealt, if dealer keydown is on Jack, dealer wins.
    // if other player keydown is on the Jack, centerPile is added to player's hand.
    // gameplay resumes.
    // if no Jack is revealed, all cards are shuffled and placed in dealer's hand
    // cards are revealed until a Jack is displayed.

  }

  updateWinCount() {
    // increment count in innerText of winCount for player that wins game
  }

  playAgain() {
    // winCount persists, game starts over
  }
}
