"use strict";

// for
function sumFor(...args) {
	let total = 0;
	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	return total;
}

// for..of
function sumForOf(...args) {
	let total = 0;
	for (const value of args) {
		total += value;
	}
	return total;
}

// while з лічильником
function sumWhile(...args) {
	let total = 0;
	let i = 0;
	while (i < args.length) {
		total += args[i];
		i++;
	}
	return total;
}

// do..while (для порожнього списку одразу повертаємо 0)
function sumDoWhile(...args) {
	if (args.length === 0) return 0;
	let total = 0;
	let i = 0;
	do {
		total += args[i];
		i++;
	} while (i < args.length);
	return total;
}

// Array.prototype.reduce
function sumReduce(...args) {
	return args.reduce((accumulator, value) => accumulator + value, 0);
}

const a1 = sumFor(1, 2, 3); // 6
const b1 = sumFor(0); // 0
const c1 = sumFor(); // 0
const d1 = sumFor(1, -1, 1); // 1
const e1 = sumFor(10, -1, -1, -1); // 7

const a2 = sumForOf(1, 2, 3);
const b2 = sumForOf(0);
const c2 = sumForOf();
const d2 = sumForOf(1, -1, 1);
const e2 = sumForOf(10, -1, -1, -1);

const a3 = sumWhile(1, 2, 3);
const b3 = sumWhile(0);
const c3 = sumWhile();
const d3 = sumWhile(1, -1, 1);
const e3 = sumWhile(10, -1, -1, -1);

const a4 = sumDoWhile(1, 2, 3);
const b4 = sumDoWhile(0);
const c4 = sumDoWhile();
const d4 = sumDoWhile(1, -1, 1);
const e4 = sumDoWhile(10, -1, -1, -1);

const a5 = sumReduce(1, 2, 3);
const b5 = sumReduce(0);
const c5 = sumReduce();
const d5 = sumReduce(1, -1, 1);
const e5 = sumReduce(10, -1, -1, -1);

console.log(a1, b1, c1, d1, e1);
console.log(a2, b2, c2, d2, e2);
console.log(a3, b3, c3, d3, e3);
console.log(a4, b4, c4, d4, e4);
console.log(a5, b5, c5, d5, e5);