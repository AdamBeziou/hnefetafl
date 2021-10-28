const PIECE_TYPES = {
    DEFENDER: 'DEFENDER',
    KING: 'KING',
    ATTACKER: 'ATTACKER'
}

class Board {
    constructor(length, width) {
        this.length = length
        this.width = width
        this.board = Array(length).fill(Array(width).fill(undefined))
    }

    getBoard() {
        return this.board
    }

    outOfBounds(x, y) {
        return x < 0 || x >= this.width || y < 0 || y >= this.length
    }

    addPiece(piece, x, y) {
        if (this.outOfBounds(x, y)) {
            throw `Out of bounds addition: (${x}, ${y})`
        }
        if (this.board[y][x]) {
            throw `Piece already exists at (${x}, ${y}): ${this.board[y][x]}`
        }
        this.board[y][x] = piece
    }

    movePiece(x1, y1, x2, y2) {
        if (this.outOfBounds(x1, y1) || this.outOfBounds(x2, y2)) {
            throw `Out of bounds move: (${x1}, ${y1}) -> (${x2}, ${y2})`
        }
        if (!this.board[y1][x1]) {
            throw `Piece doesn't exist at (${x1}, ${y1}) for move: (${x1}, ${y1}) -> (${x2}, ${y2})`
        }
        if (this.board[y2][x2]) {
            throw `Piece exists at (${x2}, ${y2}) for move: (${x1}, ${y1}) -> (${x2}, ${y2}), piece ${this.board[y2][x2]}`
        }
        this.board[y2][x2] = this.board[y1][x1]
        this.board[y1][x1] = undefined
    }
}