
class Game {
  constructor() {
    this.player1 = new Player({id: 42, wins: 0, hand: []});
    this.player2 = new Player({id: 13, wins: 0, hand: []});
    this.currentPlayer = this.player1;
    this.cardDeck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9];
    this.centerPile = [];
  }

  // when Player instantiates assign keys for deal and slap (or place this in function that validates this)

  shuffleCards(arr) {
    // use Fisher-Yates algorithm to shuffle deck
    var i = arr.length, j, temp;
    while(--i > 0) {
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  dealCards() {
    this.player1.hand = this.cardDeck.slice(0, 18);
    this.player2.hand = this.cardDeck.slice(18, 40);
  }

  playerTurn() {
    this.currentPlayer.pickCard();
    this.placeCard();
    this.changePlayer();
    return newGame.centerPile;
  }

  placeCard() {
    this.centerPile.unshift(playedCard);
     // return this.centerPile;
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    // change currentPlayer after playCard
  }

  slapCard() {
    // this will happen in main.js
    // recognize slap keydown for individual player, invoke validating function
  }

  validateSlap() {
      if (this.centerPile[0] === 11 || this.centerPile[0] == this.centerPile[1] ||
        this.centerPile[0] == this.centerPile[2]) {
          this.currentPlayer.hand = this.currentPlayer.hand.concat(this.centerPile);
          newGame.shuffleCards(this.currentPlayer.hand);
          this.centerPile = [];

          // this cannot be the currentPlayer, it needs to be linked to the keydown
        // } else {
        //   var penaltyCard = this.currentPlayer.hand.pop();
        //   opponentHand.push(penaltyCard)
        }
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
