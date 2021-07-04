const numIslands = (grid) => {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const visited = [];
  for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        bfs(i, j);
        count++;
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
        if (grid[nextX][nextY] === "1" && !visited[nextX][nextY]) {
          q.push([nextX, nextY]);
          visited[nextX][nextY] = true;
        }
      }
    }
  }

  return count;
};
