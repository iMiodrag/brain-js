**Learnig to use brain.js**

**GAME**
const board = [
    {'A1': '0', 'B1': '0', 'C1': 'x'},
    {'A2': '0', 'B2': 'x', 'C2': '0'},
    {'A3': 'x', 'B3': '0', 'C3': 'x'}
]
game = new ticTacToe(board);
viewBoard = game.getBoard();

console.log(game.analyze()); // returns winning rows
console.log('Winner is', game.winner);

function printBoard()
{
    console.log('------ BOARD -----');
    for(let i = 0; i < viewBoard.length; i++) {
        console.log(board[i]);
    }
}

printBoard();

**AI**

const testData = [
    {input: {b1 : 1}, output: {a1 : 1}},
    {input: {c1 : 0, b1 : 0, a1: 1}, output: {b2 : 1}},
    {input: {a3 : 1, b1 : 0, c1: 0}, output: {a2 : 1}}
];
aiGameObject = new aiGame();
aiGameObject.net.train(testData);
results = aiGameObject.net.run({c3 : 1});

// Output
aiGameObject.brain.likely(results, aiGameObject.net);