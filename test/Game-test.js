const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game;
  let testQuestions;

  beforeEach(function() {
    testQuestions = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }];
    game = new Game;
    console.log = function () {};
    game.printQuestion = function () {};
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store the current round', function() {
    game.start(testQuestions);

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should restart game if user scores less than 90%', function() {
    game.start(testQuestions);
  });
});
