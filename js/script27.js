'use strict'

// && запинается на лжи;
// || запинается на правде;

//1
let x = 5; 

console.log( x++ ); //5
console.log( +x );  //6
console.log( ++x );  //7

//2
console.log( [ ] + false - null + true); //NaN (нет чисел)

//3
let y = 1;
let x = y = 2; 
console.log(x);  //2

//4
console.log([ ] + 1 + 2);  // 12  т.к. [ ] + 1 = "1" => "1" + 2 = "12"
console.log(typeof([ ] + 1 + 2));  //string

//5
console.log( "1"[0] );  // 1  т.к. обращаемся к элементу массива(строки) с индексом 0.
console.log(typeof("1"[0]));  // string

//6
console.log(2 && 1 && null && 0 && undefined);  //null  т.к. && останавливается на false (null всегда false), а || останавливается на true.

//7

console.log(!!( 1 && 2 ) === (1 && 2)); //false  т.к. булевый тип(!!....) не равен числовому(строковому и т.д)

//8
console.log(null || 2 && 3 || 4); //3  т.к. приоритет && выше ||, то 1) 2 && 3 => 3 (в операторе && возвращается последнее true); 2) null || 3 => 3 (false(null)||true(3) => true(3); 3) 3||4 => 3 (в операторе || возвращается первое true)

//9
let a = [1, 2, 3];
let b = [1, 2, 3];
if(a !== b) {
  console.log('TRUE');
};  // TRUE
console.log(a == b); //false т.к.  a и b - совершенно разные ящики с разными яблоками, хоть и одного сорта (number)

//10
console.log(+"Infinity"); //Infinity

//11
console.log("Ёжик" > "яблоко"); // false т.к. Ё < я (заглавные буквы выше, следовательно их индекс меньше) 

//12
console.log(0 || "" || 2 || undefined || true || falsе); // 2  т.к false(0)||false("")||true(2); запнулись на правде (2), дальше код не пойдет.

