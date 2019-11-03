**Learnig to use brain.js**

**GAME**

    const board = [
        {'A1': '0', 'B1': '0', 'C1': 'x'},
        {'A2': '0', 'B2': 'x', 'C2': '0'},
        {'A3': 'x', 'B3': '0', 'C3': 'x'}
    ];
    
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