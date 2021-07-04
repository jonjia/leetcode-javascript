const findOrder = (numCourses, prerequisites) => {
  const edges = [];
  const inDegrees = new Array(numCourses).fill(0);
  for (let requisity of prerequisites) {
    const [a, b] = requisity;
    if (edges[b]) edges[b].push(a);
    else edges[b] = [a];
    inDegrees[a]++;
  }
  const q = [];
  const learned = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegrees[i] === 0) q.push(i);
  }

  while (q.length) {
    const x = q.shift();
    learned.push(x);
    if (edges[x]) {
      for (let y of edges[x]) {
        inDegrees[y]--;
        if (inDegrees[y] === 0) q.push(y);
      }
    }
  }
  return learned.length >= numCourses ? learned : [];
};
