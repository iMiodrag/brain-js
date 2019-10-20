const ticTacToe = require('./game/TicTacToe.js');
const aiGame = require('./ai/game.js');

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

const testData = [
    {input: {b1 : 1}, output: {a1 : 1}},
    {input: {c1 : 0, b1 : 0, a1: 1}, output: {b2 : 1}},
    {input: {a3 : 1, b1 : 0, c1: 0}, output: {a2 : 1}}
];
aiGameObject = new aiGame();
//let results = aiGameObject.runFromFile('./network.json', '{c3 : 0, A1 : 1}');



/**
 * TODO train
 */
var played = [];
let board = [
    {'A1' : '', 'B1' : '', 'C1' : ''},
    {'A2' : '', 'B2' : '', 'C2' : ''},
    {'A3' : '', 'B3' : '', 'C3' : ''}
];

let player = 'x';

let input = {};
let output = {};
let trainData = [];

function createBoard() {
    for(i = 0; i < 100; i++){
        let letter = ['A','B','C'].random();
        let number = ['1','2','3'].random();
        
        let move = letter + number;
        if(played.indexOf(move) == '-1') {
            played.push(move);
            player = player == 'x' ? '0' : 'x';
            board[number - 1][move] = (i === 0) ? 'x' : player;
    
            // build input
            if (player === 'x') {
                input[move] = 1;
            } else {
                output[move] = 0;
            }   
        }
        
    }
}

for( a = 0; a < 1000; a++) {
    createBoard();
    
    let ticTacToeGame = new ticTacToe(board);
    r = ticTacToeGame.analyze();
    
    // create train data
    // add train data only if x wins
    if (ticTacToeGame.winner === 'x') {
        // train data output is what X plays
        // train Data input is what 0
        trainData.push({input : output, output : input});
    }
}

let trainer = aiGameObject.train(trainData);
let re = aiGameObject.net.run({c3 : 1});
console.log(aiGameObject.brain.likely(re, aiGameObject.net));

//aiGameObject.saveFile(aiGameObject.net.toJSON());

///console.log('Train data', trainer);
//trainer.run({c3 : 1});

