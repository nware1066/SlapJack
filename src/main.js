var newGame = new Game;
var timeout;
// var playedCard;
newGame.shuffleCards(newGame.cardDeck);
newGame.dealCards();


window.addEventListener("keydown", handleKeydown);


function handleKeydown(event) {
  if (event.key === "q") {
    newGame.playerTurn(newGame.player1);

  } else if (event.key === "f") {
    newGame.validateSlap(newGame.player1);

  } else if (event.key === "p") {
    newGame.playerTurn(newGame.player2);

  } else if (event.key === "j") {
    newGame.validateSlap(newGame.player2);
  }
  newGame.checkForSuddenDeath();


  updateDisplay();
  var headerElement = document.querySelector(".header");
  if (newGame.header !== headerElement.innerText) {
    updateHeader();
  }
}

function updateHeader() {
  clearTimeout(timeout);
  var headerElement = document.querySelector(".header");
  headerElement.innerText = newGame.header;
   timeout = setTimeout(function() {
    newGame.header = "";
    headerElement.innerText = "";
  }, 3000);
}


function updateDisplay() {
  var monitor = document.querySelector('.monitor');
  var topCard = newGame.centerPile[0];
  var centerCardImage = document.querySelector('.center-pile .card-img');
  if (topCard) {
    centerCardImage.src = `./assets/${topCard.src}.png`;
  } else {
    centerCardImage.src = `./assets/blank.png`;
  }

  const template = `
    <h3>Game</h3>
    <p>Current Player: ${newGame.currentPlayer.id}</p>
    <p>Sudden Death: ${newGame.suddenDeath}</p>
    <p>Center Pile: ${newGame.centerPile.map(card => card.value)}</p>
    <p>Pile Length: ${newGame.centerPile.length}</p>
    <h3>Player 1</h3>
    <p>Hand: ${newGame.player1.hand.map(card => card.value) || ""}</p>
    <p>Hand Length: ${newGame.player1.hand.length}</p>
    <p>Wins: ${newGame.player1.wins}</p>
    <h3>Player 2</h3>
    <p>Hand: ${newGame.player2.hand.map(card => card.value) || ""}</p>
    <p>Length: ${newGame.player2.hand.length}</p>
    <p>Wins: ${newGame.player2.wins}</p>
    <hr/>
  `;
  monitor.insertAdjacentHTML('afterbegin', template);
}
// var playedCard = newGame.currentPlayer.pickCard();
// newGame.placeCard(playedCard);
// console.log(newGame)
