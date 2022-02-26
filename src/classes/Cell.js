class Cell {
  constructor(val, col, row, square) {
    this.val = val;
    this.col = col;
    this.row = row;
    this.square = square;
    if (val === 0) {
      this.possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  }
}

export default Cell;
