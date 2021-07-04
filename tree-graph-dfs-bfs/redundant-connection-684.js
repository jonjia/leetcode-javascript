const findRedundantConnection = (edges) => {
  let n = 0;
  for (edge of edges) n = Math.max(edge[0], edge[1], n);
  const myEdges = [];
  for (let i = 0; i < n + 1; i++) myEdges[i] = [];
  const visited = [];
  let hasCycle = false;

  for (let edge of edges) {
    const [u, v] = edge;
    addEdge(u, v);
    addEdge(v, u);
    for (let i = 0; i < n + 1; i++) visited[i] = false;
    dfs(u, -1);
    if (hasCycle) return edge;
  }

  function addEdge(u, v) {
    myEdges[u].push(v);
  }

  function dfs(x, father) {
    visited[x] = true;
    for (let y of myEdges[x]) {
      if (y === father) continue;
      if (visited[y]) hasCycle = true;
      else dfs(y, x);
    }
  }
};
