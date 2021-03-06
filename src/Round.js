const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Turn = require('./Turn');

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

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    let message;
    if (percentCorrect < 90) {
      message = `** Round over! ** You answered ${percentCorrect}% of the questions correctly. Let's try again!`
      console.log(message);
      this.restartGame()
    } else {
      message = `** Round over! ** Congratulations! You answered ${percentCorrect}% of the questions correctly!`;
      console.log(message);
      return message;
    }
  }

  restartGame() {
    const Game = require('./Game');
    const game = new Game;
    game.start(prototypeQuestions);
  }
}

module.exports = Round;
