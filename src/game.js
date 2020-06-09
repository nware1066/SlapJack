
class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.suddenDeath = false;
    this.cardDeck = this.createDeck();
    this.centerPile = [];
    this.header = "";
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
      var playedCard = this.currentPlayer.pickCard();
      this.placeCard(playedCard);
      this.changePlayer();
    }
  }

  changePlayer() {
    if (this.suddenDeath === false) {
      this.currentPlayer = this.currentPlayer.id === 1 ? this.player2 : this.player1;
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
    var otherPlayer = player.id === 1 ? this.player2 : this.player1;
    var valid = card1 === 11 || card1 == card2 || card1 == card3;

    if (this.suddenDeath && card1 === 11 && otherPlayer.hand.length === 0) {
      this.winningSlap(player);
    } else if (card1 === 11 && !this.suddenDeath) {
      this.happySlap(player, `SLAPJACK!, player ${player.id} takes the Pile!`);
    } else if (card1 == card2 && !this.suddenDeath) {
      this.happySlap(player, `PAIR!, player ${player.id} takes the Pile!`);
    } else if (card1 == card3 && !this.suddenDeath) {
      this.happySlap(player, `SANDWICH!, player ${player.id} takes the Pile!`);
    } else {
      this.sadSlap(player);
    }
  }

  happySlap(player, slapType) {
    this.header = slapType;
    player.hand = player.hand.concat(this.centerPile);
    newGame.shuffleCards(player.hand);
    this.centerPile = [];
  }

  sadSlap(player) {
    this.header = `BAD SLAP, player ${player.id} forfeits a card!`
    var otherPlayer = player.id === 1 ? this.player2 : this.player1;
    var penaltyCard = player.hand.pop();
    otherPlayer.hand.push(penaltyCard);
  }

  winningSlap(player) {
    player.wins++;
    this.header = `PLAYER ${player.id} WINS!!!`;
    this.playAgain();
    // setTimeout(this.playAgain.bind(this), 3000);
  }

  placeCard(card) {
    if (card) {
      this.centerPile.unshift(card);
    }
  }

  playAgain() {
    this.centerPile = [];
    this.player1.hand = [];
    this.player2.hand = [];
    this.suddenDeath = false;
    // this.header = "";
    this.shuffleCards(this.cardDeck);
    this.dealCards();
    updateHeader();
    updateDisplay();
    // winCount persists, game starts over
  }
}
