"use strict";

// Для просмотра выполнения кода в VScode: выделяем код - правая кнопка - Run Code


if(4 == 9){
  console.log("ok!");
} else{
  console.log("error!");
};

// код всегда будет true т.е. "ok!":
if(4){
  console.log("ok!");
} else{
  console.log("error!");
};

// несколько условий:
let num = 50;
if (num < 49){
  console.log("мало!");
} else if(num > 51){
  console.log("много!");
} else {
  console.log("правильно, 50!")
};

// Запись условия с помощью Тернарного оператора (использ-ся три аргумента) - значительно короче.
num = 51;
(num === 50) ? console.log("правильно, 50!") : console.log("error!");
// 4 + 4  бинарный оператор - 2 аргумента
// +4  унарный оператор - 1 аргумент


// Проверка на строгое соответсвие с помощью switch:
// break писать обязательно!
num = 500;
switch (num){
  case 49:
    console.log("мало!");
    break;
  case 100:
    console.log("много!"); 
    break;
  case 50:
    console.log("правильно, 50!");
    break;
  default: 
    console.log("не в этот раз!");
    break;   
};
// со строками всё работает точно так же.