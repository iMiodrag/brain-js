module.exports = class TicTacToe {
    letter = ['A', 'B', 'C'];
    winner = null;
    board;

    constructor(board) {
        this.board = board;
    }

    analyze() {
        for(let i = 0; i < this.board.length; i++) {

            if(this.board[i]['A'+(i+1)] === this.board[i]['B'+(i+1)] && this.board[i]['B'+(i+1)] === this.board[i]['C'+(i+1)]) {
                this.winner = this.board[i]['A'+(i+1)];
                return ['A'+(i+1), 'B'+(i+1), 'C'+(i+1)];
            }
          
            if(this.board[0][this.letter[i] + 1] === this.board[1][this.letter[i] + 2] && this.board[1][this.letter[i] + 2] === this.board[2][this.letter[i] + 3]) {
                this.winner = this.board[0][this.letter[i] + 1];
                return [this.letter[i] + 1, this.letter[i] + 2, this.letter[i] + 3];
            }
        }
        
        // Wins A1, B2, C3; Cross win
        if(this.board[0][this.letter[0] + 1] === this.board[1][this.letter[1] + 2] && this.board[1][this.letter[1] + 2] === this.board[2][this.letter[2] + 3]) {
            this.winner = this.board[0][this.letter[0] + 1];
            return [this.letter[0] + 1, this.letter[1] + 2, this.letter[2] + 3]
        }
        
        // Wins C1, B2, A3; Cross win
        if(this.board[0][this.letter[2] + 1] === this.board[1][this.letter[1] + 2] && this.board[1][this.letter[1] + 2] === this.board[2][this.letter[0] + 3]) {
            this.winner = this.board[0][this.letter[2] + 1];
            return [this.letter[2] + 1, this.letter[1] + 2, this.letter[0] + 3]
        }
    }

    getBoard() {
        for(let i = 0; i < this.board.length; i++) {
            return [this.board[i]['A'+(i+1)],this.board[i]['B'+(i+1)],this.board[i]['C'+(i+1)]];
        }
    }
}