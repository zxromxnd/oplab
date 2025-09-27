'use strict';


function fn() {
  const constUser = { name: 'ConstName' }; // об'єкт з полем name const
  let letUser = { name: 'LetName' }; // об'єкт з полем name let

  constUser.name = 'UpdatedConstName';
  letUser.name = 'UpdatedLetName'; // - нове значення поля name

  letUser = { name: 'NewLetName' }; // переприсвоєно
  
  /* constName = {name: "NewConstName"} - не виконається, 
    const - те що не змінне;
    можна змінювати тільки поля.
  */

  console.log('constUser:', constUser); // { name: 'UpdatedConstName' }
  console.log('letUser:', letUser);     // { name: 'NewLetName' }
}

function createUser(name, city) {
  return { name, city }; // об'єкт з двома полями
}

module.exports = { fn, createUser }; // експорт функції для використання в інших файлах
