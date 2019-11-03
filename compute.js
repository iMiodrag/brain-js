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

let board = [
    {'A1' : '', 'B1' : '', 'C1' : ''},
    {'A2' : '', 'B2' : '', 'C2' : ''},
    {'A3' : '', 'B3' : '', 'C3' : ''}
];


trainData = [];

function generateMove() {
    let letter = ['A','B','C'].random();
    let number = ['1','2','3'].random();

    let move = letter + number;

    return move;
}

function generateData() {
    let firstMove = generateMove();
    while(true) {
        let secondMove = generateMove();
        if (secondMove !== firstMove) {
            return [firstMove, secondMove];
        }
    }
}

for (let i = 0; i < 100; i++) {
    let generateMove = generateData();
    let move = {input: {[generateMove[0]] : 0}, output : {[generateMove[1]] : 1}};
    trainData.push(move);
}

aiGameObject = new aiGame();
let train = aiGameObject.train(trainData);
let run = aiGameObject.net.run('A1');

//aiGameObject.saveFile(aiGameObject.net.toJSON());



