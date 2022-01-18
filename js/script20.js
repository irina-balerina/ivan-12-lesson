'use strict'

const options = {
name: 'test',
width: 1024,
height: 1024,
colors: {
  border: 'black',
  bg: 'red'
},
//метод makeTest (чтобы наш объект что-то делал)
makeTest: function() {
  console.log('Test');
}  
};
options.makeTest(); // запустили метод makeTest
//console.log(options.name);
console.log(options['colors'] ['border']); // некрасивый код, компьютер предложит

//Деструктуризацию кода:

const {border, bg} = options.colors;
console.log(bg);

console.log(Object.keys(options));
console.log(Object.keys(options).length); //количество свойств в объекте

//delete options.name;
//console.log(options);

// Методы перебора for in  и  for of :

let counter = 0;

for(let key in options) {
  
  if(typeof(options[key]) === 'object') {
    for(let i in options[key]) {
    console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    //counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
};
console.log(counter); //количество свойств в объекте