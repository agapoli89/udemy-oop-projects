export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.isMine = false;
        this.isReveal = false; // czy jest już odkryte
        this.isFlagged = false;
        this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
        this.element = null;
    }
}