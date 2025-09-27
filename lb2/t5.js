// Колекції

`use strict`;

const pbArray = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Sara Aurelius', phone: '+380115552266'},
    {name: 'Claus Aurelius', phone: '+380226264341'},
    {name: 'Laura Aurelius', phone: '+380676264225'},
    {name: 'Jack Aurelius', phone: '+380288379867'},
];

// шукаємо у масиві через for
function findPhoneByNameArray(name) { 
  for (let i = 0; i < pbArray.length; i++) {
    if (pbArray[i].name === name) {
      return pbArray[i].phone; // повертаємо номер якщо ім'я співпадає
    }
  }
  return 'Not found'; // якщо не знайдено
}

const pbHash = {
  'Marcus Aurelius': '+380445554433',
  'Sara Aurelius': '+380115552266',
  'Claus Aurelius': '+380226264341',
  'Laura Aurelius': '+380676264225',
  'Jack Aurelius': '+380288379867'
};

// шукаємо у хеш таблиці:

function findPhoneByNameHash(name) {
    return pbHash[name] || "Not found";
}

console.log("(Array) Laura Aurelius:", findPhoneByNameArray("Laura Aurelius"));
console.log("(Hash) Laura Aurelius:", findPhoneByNameHash("Laura Aurelius"));