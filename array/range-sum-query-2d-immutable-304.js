class NumMatrix {
  constructor(matrix) {
    this.sums = [];
    for (let i = 0; i < matrix.length; i++) {
      this.sums.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        this.sums[i][j] =
          this.getSum(i - 1, j) +
          this.getSum(i, j - 1) -
          this.getSum(i - 1, j - 1) +
          matrix[i][j];
      }
    }
  }

  getSum(i, j) {
    if (i >= 0 && j >= 0) return this.sums[i][j];
    return 0;
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.getSum(row2, col2) -
      this.getSum(row2, col1 - 1) -
      this.getSum(row1 - 1, col2) +
      this.getSum(row1 - 1, col1 - 1)
    );
  }
}
