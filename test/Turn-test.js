const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);

  it('should take users\'s guess and current card as arguments', function() {
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.equal(card);
  });

  it('should return guess', function() {
    const guess = turn.returnGuess();
    expect(guess).to.equal('object');
  });

  it('should return card', function() {
    const returnedCard = turn.returnCard();
    expect(returnedCard.id).to.equal(card.id);
  });

  it('should check guess against correct answer', function() {
    const guessEvaluation = turn.evaluateGuess();
    expect(guessEvaluation).to.equal(true);
  });  

  it('should give feedback', function() {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('correct!');
  });

});
