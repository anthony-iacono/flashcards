const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

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
    expect(round.currentCard).to.equal(card1);
  });

  it('should default to 0 turns', function() {
    expect(round.turns).to.equal(0);
  })

  it('should be able to return the current card', function() {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(deck.cards[0]);
  });

  describe('takeTurn', function() {

    it('should update turns count when a turn is taken', function () {
      round.takeTurn('sea otter');

      expect(round.turns).to.equal(1);
    });

    it('should update turns count whether guess is correct or incorrect', function() {
      round.takeTurn('pug');

      expect(round.turns).to.equal(1);
    });

    it('should update the current card to be the next card in the deck', function() {
      round.takeTurn('sea otter');

      expect(round.currentCard).to.equal(card2);
    });

    it('should evaluate correct guesses and provide feedback', function() {
      const feedback = round.takeTurn('sea otter');

      expect(feedback).to.equal('correct!');
    });

    it('should evaluate an incorrect guess, store its id, and provide feedback', function() {
      console.log('current card id: ', round.currentCard.id)
      const feedback = round.takeTurn('pug');
      console.log('feedback: ', feedback)

      expect(feedback).to.equal('incorrect!');
      expect(round.incorrectGuesses.length).to.equal(1);
      expect(round.incorrectGuesses[0]).to.equal(1);
    });
  });

  it.skip('should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    const percentCorrect = round.calculatePercentCorrect();

    expect(percentCorrect).to.equal(100);
  })

  it.skip('should be able to end the round', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    const message = round.endRound();

    expect(message).to.equal(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
  });
});
