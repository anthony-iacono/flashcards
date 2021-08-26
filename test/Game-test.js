const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store the current round', function() {
    console.log = function () {};
    game.printQuestion = function () {};
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
