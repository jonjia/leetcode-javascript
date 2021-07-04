const solve = (board) => {
  const m = board.length;
  const n = board[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const visited = [];
  for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i === 0 || j === 0 || i === m - 1 || j === n - 1) &&
        board[i][j] === "O" &&
        !visited[i][j]
      ) {
        bfs(i, j);
        board[i][j] = "A";
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "A") {
        board[i][j] = "O";
      } else if (board[i][j] == "O") {
        board[i][j] = "X";
      }
    }
  }

  function bfs(x, y) {
    const q = [];
    q.push([x, y]);
    visited[x][y] = true;
    while (q.length) {
      const head = q.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = head[0] + dx[i];
        const nextY = head[1] + dy[i];
        if (nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) continue;
        if (board[nextX][nextY] === "O" && !visited[nextX][nextY]) {
          board[nextX][nextY] = "A";
          q.push([nextX, nextY]);
          visited[nextX][nextY] = true;
        }
      }
    }
  }
};
