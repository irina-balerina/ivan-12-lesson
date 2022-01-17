'use strict'
function first(){
  //do something
  setTimeout(function(){
    console.log(1);
  }, 500);  // это ф-ция задержки времени на полсекунды
}

function second(){
  console.log(2);
}

first();
second();

// Если ф-ции в коде идут одна за другой, то это еще не значит, что выполнятся они в том же порядке !!!

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}
function done() {
  console.log('I am callback function');
}
learnJS('JavaScript', done);

//Колбэки позволяют быть уверенным, что нужная функция не выполнится раньше другой нужной :))