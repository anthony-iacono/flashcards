class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    this.turns++;
    const nextCardIndex = this.deck.cards.indexOf(this.currentCard) + 1;
    this.currentCard = this.deck.cards[nextCardIndex];
  }
}

module.exports = Round;
