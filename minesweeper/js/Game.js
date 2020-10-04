import { Cell } from './Cell.js'

class Game {
    #config = {
        easy: {
            rows: 8,
            cols: 8,
            mines: 10
        },
        normal: {
            rows: 16,
            cols: 16,
            mines: 40
        },
        expert: {
            rows: 30,
            cols: 16,
            mines: 99
        }
    }

    #numberOfRows = null;
    #numbersOfCols = null;
    #numbersOfMines = null;

    #cells = [];

    initializeGame() {
        this.#newGame();
    }

    #newGame(rows = this.#config.easy.rows, cols = this.#config.easy.cols, mines = this.#config.easy.mines) {
        this.#nuberOfRows = rows;
        this.#nuberOfCols = cols;
        this.#nuberOfMines = mines;

        this.#generateCells();
    }

    #generateCells() {
        for (let row = 0; row < this.#numberOfRows; row++) {
            this.#cells[row] = []
            for (let col = 0; col < this.#numbersOfCols; col++) {
                this.#cells[row].push(new Cell(col, row))
            }
        }
    }
}

window.onload = function () {
    const game = new Game();
    game.initializeGame();
}