var newGame = new Game;
var playedCard;
newGame.shuffleCards(newGame.cardDeck);
newGame.dealCards();


window.addEventListener("keydown", handleKeydown);


function handleKeydown(event) {
  console.log(event);

  if (event.key === "p") {
    newGame.playerTurn("player1");

  } else if (event.key === "t") {
    // console.log("also player1");

  } else if (event.key === "q") {
    newGame.playerTurn("player2");

  } else if (event.key === "j") {
    // console.log("also player2");
  }
}
// var playedCard = newGame.currentPlayer.pickCard();
// newGame.placeCard(playedCard);
// console.log(newGame)
