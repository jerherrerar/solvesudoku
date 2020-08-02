class Cell {
  constructor(val, col, row, square) {
    this.val = val;
    this.col = col;
    this.row = row;
    this.square = square;
    if (val === 0) {
      this.possible = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
  }
}

export default Cell;