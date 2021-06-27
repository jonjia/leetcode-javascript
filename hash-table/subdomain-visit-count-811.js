const subdomainVisits = (cpdomains) => {
  const cache = {};
  for (let record of cpdomains) {
    const [count, address] = record.split(" ");
    const words = address.split(".");
    const domains = [];
    let domain = "";
    for (let i = words.length - 1; i >= 0; i--) {
      domain = `${words[i]}${domain ? "." : ""}${domain}`;
      domains.push(domain);
    }
    domains.forEach((key) => {
      if (cache[key]) {
        cache[key] += Number(count);
      } else {
        cache[key] = Number(count);
      }
    });
  }
  return Object.entries(cache).map(([key, value]) => `${value} ${key}`);
};
