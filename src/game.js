class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.centerPile = [];
  }

  // when Player instantiates assign keys for deal and slap (or place this in function that validates this)

  dealCards() {

  }
  
  shuffleCards() {
    // use Fisher-Yates algorithm to shuffle deck
    var i = arr.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    console.log(arr);  }

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
