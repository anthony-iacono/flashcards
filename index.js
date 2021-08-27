const http = require('http');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Game = require('./src/Game.js');
const game = new Game;
let app = http.createServer();

app.listen(3000, '127.0.0.1');
game.start(prototypeQuestions);
