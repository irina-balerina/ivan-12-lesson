'use strict'

// Методы для строк

const str = "some_teSt";
console.log(str.length);
console.log(str[2]); // вывели 3-й символ
console.log(str[2, 7]); // вывели 3-й и 8-й символ


const arr = [1, 2, 3, 12, 15];
console.log(arr.length);

// МЕТОДЫ
console.log(str.length);
console.log(str.toUpperCase()); //скобки обязательно!!
console.log(str.toLowerCase());
console.log(str);

// Поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q')); // -1 в консоли означает, что такой буквы в строке нет

// методы взаимодействия со строкой
const logg = "Hello world";
console.log(logg.slice(6, 11)); //взяли слово world (индекс первой буквы - индекс первого ненужного знака)
console.log(logg.slice(0, 5));
console.log(logg.slice(3, 5) + 'l');
console.log(logg.slice(6).toUpperCase(6) + '!'); //берется от 6го индекса до конца строки
console.log((logg.slice(6, 7).toUpperCase()) + logg.slice(7) + '!');
console.log(logg.slice(-6, -2)); //справа налево
console.log(logg.substr(0, 5));  // берется от 0-го индекса 5 знаков  (удобно)

//Методы для чисел

const num = 12.2;
console.log(Math.round(num));  // округлили 

const test = "12.2px";
console.log(parseInt(test)); // перевел в число и округлил
console.log(parseFloat(test)); // перевел в число 

