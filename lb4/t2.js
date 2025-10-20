"use strict";

// ітерація по двовимірному масиву, шукаємо максимальний елемент
function max(matrix) {
	let currentMax = -Infinity; // починаємо з найменшого можливого числа
	for (const row of matrix) { // проходимо по рядках
		for (const value of row) { // проходимо по елементах рядка
			if (value > currentMax) currentMax = value;
		}
	}
	return currentMax;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9