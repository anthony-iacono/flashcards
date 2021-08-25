const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  let deck;
  let round;

  beforeEach(function() {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should hold the first card in the deck as the current card at the start of the round', function() {
    expect(round.currentCard).to.equal.(card1);
  });
});
