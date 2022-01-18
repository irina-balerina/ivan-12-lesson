'use strict'

let arr = [1, 2, 3, 5, 8];

arr[99] = 0;
console.log(arr.length); 
console.log(arr);

arr = [1, 2, 3, 5, 8];
// POP. Метод, удаляющий последний элемент в массиве:

arr.pop();
console.log(arr);


// PUSH. Метод, добавляющий элемент в конец массива:

arr.push(99);
console.log(arr);


// SHIFT & UNSHIFT. Для работы с началом массива исп-ся методы shift и unshift, но крайне редко. Т.к. при добавлении или удалении первого элемента массива меняются все остальные индексы, а это очень долго по меркам программирования


// FOREACH. Метод forEach для подробного ПЕРЕБОРА массива по Элементу, Индексу и Массиву:

arr.forEach(function(item, i, arr){
  console.log(`${i}: ${item} внутри массива ${arr}`);
  });

//FOR & FOR OF. ПЕРЕБОР массива

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
};

for(let element of arr) {
  console.log(element);
};                         
 // Циклы for используются только когда надо ОСТАНОВИТЬ перебор массива с помощью break, continu. В основном используется метод перебора массива FOREACH. 


 // MAP, EVERY/SOME, FILTER, REDUCE. Методы map, every/some, filter, reduce  - перебирают и модифицируют массив.
 
 
 // SPLIT(расколоть). МОДИФИЦИРУЕМ строку в массив с помощью split:

 const str = prompt("", "");
 const products = str.split(", "); //в кавычках указывается разделитель (, )
 console.log(products);

 // JOIN. И наоборот, превращаем массив в строку с помощью метода join:

 console.log(products.join(" * "));
 console.log(typeof(products));


 // SORT. Метод sort сортирует элементы массива как строки по алфавиту:

 let arr2 = ['kjl', 'opk', 'bnm', 'mki'];
 arr2.sort();
 console.log(arr2);

 let arr3 = [5, 2, 8, 6, 1, 23, 55];
 arr3.sort();
 console.log(arr3); // сравнивает посимвольно

 //чтобы избежать в массиве с числами этой путаницы используют КОЛБЭК функцию compareNum:

 let arr4 = [5, 2, 8, 6, 1, 23, 55];
 arr4.sort(compareNum);
 console.log(arr4);

 // Колбэк-функция для чисел!!!
 function compareNum(a, b){
   return a - b;
 }
