`use strict`;

function inc(n) {
  const x = n;
  return x + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });