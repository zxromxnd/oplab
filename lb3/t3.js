`use strict`;

function ipToNumber(ip = '127.0.0.1') {
    let parts = ip.split('.'); // розбиваємо ip по точках
    let numbers = parts.map(part => parseInt(part)); // перетворення частин з рядка в число
    
    let result = numbers.reduce((sum, currentNumber, index) => { // сума усіх частин ip із зсувами
        
        let shiftAmount = (3 - index) * 8; // на скільки біт зсувати байт
        
        return sum + (currentNumber << shiftAmount); // зсуваємо та додаємо до суми
    }, 0);
    
    return result;
}

console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('127.0.0.1'));