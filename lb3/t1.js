`use strict`;

function random(min, max) {
    if (max == undefined) {
        max = min; // якщо random(5, 15) - це будуть числа від 5 до 15
        min = 0; // якщо random(5) - це вже будуть числа від 0 до 5 (max = min)
    }
    
    /* Math.floor() різає дрібну частину, залишає цілу
    Math.random() дає дріб від 0 до 1
    (max - min + 1) + min - кількість можливих чисел
    у діапазоні, та зсув результата к початку діапазона
    */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(5, 15));
console.log(random(5));