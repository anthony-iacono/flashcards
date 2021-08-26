const data = require('./data');
const questions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cards = questions.map((question) => new Card(question.id, question.question, question.answers, question.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
