"use strict"

//Копирование объектов в JavaScript.   https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff

// Ссылка на объект:
let obj = {
  a: 1,
  b: 2,
};
let copy = obj;

obj.a = 5;
console.log(copy.a);
// Результат 
// a = 5;



// Spread syntax (...)
// Создание поверхностной копии:
function log(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
};
const num = [5, 3, 8, 10, 15];
log(...num);

//Скопируем объект:
const obj = {
  one: 1,
  two: 2,
  seven: 7,
  nine: 9
};
const copyObj = {...obj};
console.log(obj);
console.log(copyObj);