const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {
  let card;
  let turn;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should take users\'s guess and current card as arguments', function() {
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.equal(card);
  });

  it('should be able to return user\'s guess', function() {
    const guess = turn.returnGuess();

    expect(guess).to.equal('object');
  });

  it('should be able to return current card', function() {
    const returnedCard = turn.returnCard();

    expect(returnedCard.id).to.equal(card.id);
  });

  it('should be able to determine whether guess is correct or incorrect', function() {
    const correctGuess = turn.evaluateGuess();
    turn.guess = 'function';
    const incorrectGuess = turn.evaluateGuess();

    expect(correctGuess).to.equal(true);
    expect(incorrectGuess).to.equal(false);
  });

  it('should give feedback', function() {
    const positiveFeedback = turn.giveFeedback();
    turn.guess = 'function';
    const negativeFeedback = turn.giveFeedback();

    expect(positiveFeedback).to.equal('correct!');
    expect(negativeFeedback).to.equal('incorrect!');
  });
});
