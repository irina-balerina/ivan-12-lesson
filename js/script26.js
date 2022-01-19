"use strict"

// ! Превратить в строку:

// 1) Strng 
let num = 25;
console.log(typeof(String(num)));  
console.log(String(num));

// 2) конкатенация строки с числом = строка
console.log("https://vk.com/catalog/" + num);  

// 3) уже в объявлении переменной создаем строку
const fontSize = 26 + 'px';   


// !! Превратить в число

// 1) Number
console.log(typeof(Number('358')), Number('358'));  

// 2) унарный +  перед выражением
console.log(typeof(+'145'), +'145');  

// 3) метод parseInt (значение, в десятичной системе)
console.log(typeof(parseInt('15px', 10)), parseInt('15px', 10));  


let answer = +prompt('Hello', '');
console.log(typeof(answer), answer); 


// !!! Превратить в булевое выражение

// Всегда false:   0, '', null, undefined, NaN;
// Всё остальное - true; (строки, массивы, объекты и тд)

// 1)
let switcher = null;
if(switcher) {
  console.log("work...");
};  // null = false => условие не выполняется и код внутри условия не сработает

switcher = 1;
if(switcher) {
  console.log("work again...");
};  // null = true => условие  выполняется и код внутри условия  сработает

// 2)
console.log(typeof(Boolean('358')), Boolean('358'));

// 3)
console.log(typeof(!!'str 253'), !!'str 253');