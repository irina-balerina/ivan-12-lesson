"use strict"

const soldier = {
  health: 400,
  armor: 400,
  sayHello: function(){
    console.log('Hello! I am soldier.');
  }
};

const john = Object.create(soldier); //создали Джона с объектом-прототипом soldier
john.sayHello();  //Теперь свойства солдата доступны и Джону

//По-другому можно назначить прототип так:
const soldier2 = {
  health: 500,
  armor: 600,
  sayHello: function(){
    console.log('Hello! I am soldier2.');
  }
};
const john2 = {};
Object.setPrototypeOf(john2, soldier2);
john2.sayHello();
console.log(john2.armor);



