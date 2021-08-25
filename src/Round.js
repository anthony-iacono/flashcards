const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    const feedback = turn.giveFeedback();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }

    this.currentCard = this.deck.cards[this.turns];

    return feedback;
  }

  calculatePercentCorrect() {
    const percentIncorrect = this.incorrectGuesses.length / this.deck.cards.length;
    return Math.round((1 - percentIncorrect) * 100);
  }
}

module.exports = Round;
