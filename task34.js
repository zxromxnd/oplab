`use strict`;

const mxArray = [true, "hello", 5, 12, -200, false, false, "word"];

const typeCounts = {
  boolean: 0,
  string: 0,
  number: 0,
};

for (const item of mxArray) {
  const type = typeof item;
  if (typeCounts[type] !== undefined) {
    typeCounts[type] += 1;
  }
}
console.dir(typeCounts);