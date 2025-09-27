// Функції

`use strict`

function average(a, b) {
    return (a + b) / 2; // середнє арифметичне
}

function square(x) {
    return x * x; // x^2
}

function cube(x) {
    return x * x *x; // x^3
}

function calculate() {
    const array = []; 
    for(let i = 0; i <= 9; i++) {
        
        const sqr = square(i); // квадрат числа
        const cub = cube(i); // куб числа
        const avg = average(sqr, cub); // середнє квадрата і куба
        
        array.push(avg); // додали середнє до масиву
    }

    return array;
}

console.log(calculate());