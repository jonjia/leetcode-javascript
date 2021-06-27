const groupAnagrams = (strs) => {
  const cache = {};
  for (let str of strs) {
    const key = str.split("").sort().join();
    if (cache[key]) {
      cache[key].push(str);
    } else {
      cache[key] = [str];
    }
  }
  return Object.values(cache);
};

const groupAnagrams1 = (strs) => {
  const cache = {};
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.join();
    if (cache[key]) {
      cache[key].push(str);
    } else {
      cache[key] = [str];
    }
  }
  return Object.values(cache);
};
