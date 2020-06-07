class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.royals = {
      10: "10",
      11: "jack",
      12: "queen",
      13: "king"
    }
    this.src = `${suit}-${value > 9 ? this.royals[value] : "0" + value}`
  }
}
