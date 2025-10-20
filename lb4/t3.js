"use strict";

// рахуємо вік (тривалість життя)
function ages(persons) {
	const result = {};
	for (const key in persons) {
		if (!Object.prototype.hasOwnProperty.call(persons, key)) continue; //пропускаємо успадковані ключі
		const person = persons[key];
		result[key] = person.died - person.born;
	}
	return result;
}

const persons = {
	lenin: { born: 1870, died: 1924 },
	mao: { born: 1893, died: 1976 },
	gandhi: { born: 1869, died: 1948 },
	hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));