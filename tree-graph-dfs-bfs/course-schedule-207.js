const canFinish = (numCourses, prerequisites) => {
  const edges = [];
  const inDegree = new Array(numCourses).fill(0);
  for (let edge of prerequisites) {
    const [a, b] = edge;
    if (edges[b]) edges[b].push(a);
    else edges[b] = [a];
    inDegree[a]++;
  }

  const q = [];
  let learned = 0;
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.push(i);
  }
  while (q.length) {
    const x = q.shift();
    learned++;
    if (edges[x]) {
      for (let y of edges[x]) {
        inDegree[y]--;
        if (inDegree[y] === 0) q.push(y);
      }
    }
  }
  return learned === numCourses;
};
