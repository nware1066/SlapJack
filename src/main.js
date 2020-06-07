var newGame = new Game;
var playedCard;
newGame.shuffleCards(newGame.cardDeck);
newGame.dealCards();


window.addEventListener("keydown", handleKeydown);


function handleKeydown(event) {
  console.log(event);

  if (event.key === "q") {
    newGame.playerTurn("player1");

  } else if (event.key === "f") {
    newGame.validateSlap("player1");

  } else if (event.key === "p") {
    newGame.playerTurn("player2");

  } else if (event.key === "j") {
    newGame.validateSlap("player2");
  }
  updateDisplay();
}

function updateDisplay() {
  const body = document.querySelector('body');
  const template = `
    <h3>Game</h3>
    <p>Current Player: ${newGame.currentPlayer.id}</p>
    <p>Center Pile: ${newGame.centerPile.map(card => card.value)}</p>
    <p>Pile Length: ${newGame.centerPile.length}</p>
    <h3>Player 1</h3>
    <p>Hand: ${newGame.player1.hand.map(card => card.value)}</p>
    <p>Hand Length: ${newGame.player1.hand.length}</p>
    <p>Wins: ${newGame.player1.wins}</p>
    <h3>Player 2</h3>
    <p>Hand: ${newGame.player2.hand.map(card => card.value)}</p>
    <p>Length: ${newGame.player2.hand.length}</p>
    <p>Wins: ${newGame.player2.wins}</p>
    <hr/>
  `;
  body.insertAdjacentHTML('afterbegin', template);
}
// var playedCard = newGame.currentPlayer.pickCard();
// newGame.placeCard(playedCard);
// console.log(newGame)
