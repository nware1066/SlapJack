
class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.cardDeck = this.createDeck();
    this.centerPile = [];
  }

  // when Player instantiates assign keys for deal and slap (or place this in function that validates this)
  createDeck() {
    var deck = [];
    var suitColors = ["red", "gold", "green", "blue"];
    for (var i = 0; i <= 3; i++) {
      var newSuit = this.createSuit(suitColors[i]);
      deck = deck.concat(newSuit);
    }
    return deck;
  }

  createSuit(suitColor) {
    var suit = [];
    for (var i = 1; i <= 13; i++) {
      var newCard = new Card(i, suitColor);
      suit.push(newCard);
    }
    return suit;
  }

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
    this.player1.hand = this.cardDeck.slice(0, 26);
    this.player2.hand = this.cardDeck.slice(26, 60);
  }

  playerTurn(player) {
    if (this[player] === this.currentPlayer) {
      this.currentPlayer.pickCard();
      this.placeCard();
      this.changePlayer();
      return newGame.centerPile;
    }
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
    // this will happen in main.js ??
    // recognize slap keydown for individual player, invoke validating function
  }

  validateSlap(player) {
    var card1 = this.centerPile[0].value;
    var card2 = this.centerPile[1].value;
    var card3 = this.centerPile[2].value;
      if (card1 === 11 || card1 == card2 ||
        card1 == card3) {
          this[player].hand = this[player].hand.concat(this.centerPile);
          newGame.shuffleCards(this[player].hand);
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
