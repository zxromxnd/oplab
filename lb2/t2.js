// Цикли

`use strict`;

function range(start, end) { // масив чисел з діапазону [15, 30], включаючи крайні числа.
    const array = [];
    for(let s = start; s <= end; s++) {
        array.push(s); // додаємо числа до масиву
    }

    return array; // повертаємо масив 1
}

function rangeOdd(start, end) { // масив непарних чисел з діапазону [15, 30], включаючи крайні числа.
    const array = [];
    for (let s = start; s <= end; s++) {
        if(s % 2 !== 0) { // перевіряємо на непарність, якщо if спрацювало - додаємо непарне число до масиву
            array.push(s);
        }
    } 

    return array; // повертаємо масив 2
}
                                    
console.log(range(15, 30));        
console.log(rangeOdd(15, 30));
                                    