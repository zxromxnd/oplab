`use strict`;

// генерація випадкового ключа
function generateKey(length, characters) {
    let result = '';

    for(let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length); // рандом індекс від 0 до довжини characters
        let randomChar = characters[randomIndex]; // беремо символ по індексу
        result += randomChar; // додаємо символ до результату
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);