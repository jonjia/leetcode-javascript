const robotSim = (commands, obstacles) => {
  const obstaclesSet = new Set();
  for (let i = 0; i < obstacles.length; i++) {
    obstaclesSet.add(obstacles[i].join());
  }
  let x = 0;
  let y = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let direction = 0;
  let ans = 0;
  for (let command of commands) {
    if (command === -2) {
      direction = (direction - 1 + 4) % 4;
    } else if (command === -1) {
      direction = (direction + 1) % 4;
    } else {
      for (let i = 0; i < command; i++) {
        const tempX = x + dx[direction];
        const tempY = y + dy[direction];
        if (obstaclesSet.has(`${tempX},${tempY}`)) {
          break;
        } else {
          x = tempX;
          y = tempY;
          ans = Math.max(ans, x * x + y * y);
        }
      }
    }
  }
  return ans;
};
