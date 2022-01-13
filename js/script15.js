"use strict";

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









console.log(personalMovieDB);