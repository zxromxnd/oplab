`use strict`;

function inc(o) {
  o.n += 1;
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);