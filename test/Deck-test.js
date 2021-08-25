const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const cards = [card1, card2, card3];
  const deck = new Deck(cards);

  it('should take an array of cards as an argument', function() {
    expect(deck.cards).to.equal(cards);
  });

  it('should be able to tell how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
})
