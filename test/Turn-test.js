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

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store user\'s guess', function() {
    expect(turn.guess).to.equal('object');
    //test for string? maybe not
  });

  it('should store the card', function() {
    expect(turn.card).to.equal(card);
  })

  it('should be able to return user\'s guess', function() {
    const guess = turn.returnGuess();

    expect(guess).to.equal('object');
  });

  it('should be able to return the card', function() {
    const returnedCard = turn.returnCard();

    expect(returnedCard.id).to.equal(card.id);
  });

  it('should be able to evaluate whether the guess is correct or incorrect', function() {
    const correctGuess = turn.evaluateGuess();
    turn.guess = 'function';
    const incorrectGuess = turn.evaluateGuess();

    expect(correctGuess).to.be.true;
    expect(incorrectGuess).to.be.false;
  });

  it('should be able to give feedback', function() {
    const positiveFeedback = turn.giveFeedback();
    turn.guess = 'function';
    const negativeFeedback = turn.giveFeedback();

    expect(positiveFeedback).to.equal('correct!');
    expect(negativeFeedback).to.equal('incorrect!');
  });
  // separate by incorrect and correct; ask instructors what preference
});
