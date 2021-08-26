const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  const questions = [{
    "id": 1,
    "question": "What is Robbie\'s favorite animal?",
    "answers": ["sea otter", "pug", "capybara"],
    "correctAnswer": "sea otter"
  }, {
    "id": 14,
    "question": "What organ is Khalid missing?",
    "answers": ["spleen", "appendix", "gallbladder"],
    "correctAnswer": "gallbladder"
  }, {
    "id": 12,
    "question": "What is Travis\'s middle name?",
    "answers": ["Lex", "William", "Fitzgerald"],
    "correctAnswer": "Fitzgerald"
  }];
  const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const game = new Game;
  const deck = new Deck([card1, card2, card3]);
  let round;

  // beforeEach(function() {
  //   deck = new Deck([card1, card2, card3]);
  //   round = new Round(deck);
  // })

  // it('should store the current round', function() {
  //   expect(game.currentRound).to.equal(round)
  // });

  // it('should be able to create cards', function() {
  //   game.start(questions);
  //   expect(game.round.deck[0].id).to.equal(questions[0].id);
  //   expect(game.round.deck[0].question).to.equal(questions[0].question);
  //   expect(game.round.deck[0].answers).to.equal(questions[0].answers);
  //   expect(game.round.deck[0].correctAnswer).to.equal(questions[0].correctAnswer);
  // })
  //
  // it('should be able to put cards in deck', function() {
  //
  // })
})
