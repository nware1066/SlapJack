
class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.opponent = this.player2;
    this.suddenDeath = false;
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
    var suit = [new Card(11, suitColor)];
    // for (var i = 1; i <= 13; i++) {
    //   var newCard = new Card(i, suitColor);
    //   suit.push(newCard);
    // }
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
    this.player1.hand = this.cardDeck.slice(0, 2);
    this.player2.hand = this.cardDeck.slice(2, 60);
  }

  playerTurn(player) {
    if (this[player] === this.currentPlayer) {
      var playedCard = this.currentPlayer.pickCard();
      this.placeCard(playedCard);
      this.checkForSuddenDeath();
      this.changePlayer();
    }
  }

  checkForSuddenDeath() {
    if (this.player1.hand.length === 0 || this.player2.hand.length === 0) {
      this.suddenDeath = true;
    } else {
      this.suddenDeath = false;
    }
  }

  validateSlap(player) {
    var card1 = this.centerPile[0] ? this.centerPile[0].value : "no card1";
    var card2 = this.centerPile[1] ? this.centerPile[1].value : "no card2";
    var card3 = this.centerPile[2] ? this.centerPile[2].value : "no card3";
    var otherPlayer = this[player].id === 1 ? this.player2 : this.player1;

    if (this.suddenDeath && card1 === 11 && otherPlayer.hand.length === 0) {
      this[player].wins++;
    }

    if (card1 === 11 || card1 == card2 || card1 == card3) {
      this[player].hand = this[player].hand.concat(this.centerPile);
      newGame.shuffleCards(this[player].hand);
      this.centerPile = [];
      this.checkForSuddenDeath();
    } else {
      var penaltyCard = this[player].hand.pop();
      otherPlayer.hand.push(penaltyCard);
    }
  }

  suddenDeath() {
    var card1 = this.centerPile[0].value || "no card3";
    var otherPlayer = this[player].id === 1 ? this.player2 : this.player1;

    if (this.suddenDeath && card1 === 11 && otherPlayer.hand === 0) {
      this[player].wins++;
    }
  }


  placeCard(card) {
    if (card) {
      this.centerPile.unshift(card);
    }
  }

  changePlayer() {
    var opponent = this.opponent;
    this.opponent = this.currentPlayer;
    this.currentPlayer = opponent;
    // change currentPlayer after playCard
  }


  updateWinCount() {
    // increment count in innerText of winCount for player that wins game
  }

  playAgain() {
    // winCount persists, game starts over
  }
}
