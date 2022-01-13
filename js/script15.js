"use strict";

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' ); 

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],  // жанры
  privat: false
};

// Используем цикл, чтобы автоматизировать процесс получения данных от пользователя:

for(let i = 0; i < 2; i++) {
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
      b = prompt( 'На сколько оцените его?', '');

  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
};  

// определяем категорию пользователя по числу просм-х фильмов:

if(personalMovieDB.count < 10) {
  console.log('Просмотрено мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
  console.log('Вы - классический зритель');
} else if( personalMovieDB.count >= 30 ) {
  console.log('Вы - киноман');
} else {
  console.log('произошла ошибка!');
}

// Переписать цикл еще двумя способами:

// while
/*
let i = 0;
while(i <= 1) {
  i += 1;
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
  b = prompt( 'На сколько оцените его?', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
};    */

 // do while
/*
 let i = 0;
 do {
   i += 1;
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
        b = prompt( 'На сколько оцените его?', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
 }
 while(i <= 1 );  */






console.log(personalMovieDB);