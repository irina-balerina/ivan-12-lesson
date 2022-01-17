"use strict"

let num = 20; // глобальная переменная

function showFirstMessage() {
let num = 10;// локальная переменная
console.log("Hello, World!");
console.log(num);
}

console.log(num);
showFirstMessage();  // чтобы функция сработала, ее надо обязательно вызвать!!!
// в названии функции первое слово обязательно должно быть глаголом (show)


function calc(a, b) {
  return(a + b);  // return позволяет вернуть результат ф-ции во внешний мир
  console.log('mistake'); // этот код никогда не выполнится, т.к. ф-ция заканчивается на return
};

console.log(calc(3, 5));
console.log(calc(98, 5));
console.log(calc(3, 2));
console.log(calc(12, 39));

//Fuction Declaration

console.log(ret()); // функция, заданная в виде Fuction Declaration (ниже), может выполняться до ее объявления, аналогично var!!! (комп-р сначала считывает их)

function ret() {
  let num = 50;
  // some code
  return(num);
} //  ; здесь не ставится

let someNum = ret();
console.log(someNum);


// Function Expression (сначала объявляем переменную, кот-й присваиваем  функцию)

const logger = function() {
console.log("I write function.");
}; // ; здесь нужна

logger(); //вызвали ф-цию


// Стрелочные функции

const calc2 = (a, b) => a * b;
console.log(calc2(3, 6));

// или если действий в ф-ции много, в 1 строку не помещается, то
const calc3 = (a, b) => {
  return a / b;
};
console.log(calc3(30, 6));

