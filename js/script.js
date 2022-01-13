const numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' ); 
// вторые кавычки - для записи ответа; унарный +  это вывод типа number (сразу выведем число, а не строку)

//Создаем объект, в который б. помещать данные от пользователя
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],  // жанры
  privat: false
};
const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
      b = prompt( 'На сколько оцените его?', ''),
      c = prompt( 'Какой фильм вы уже посмотрели?', '' ),
      d = prompt( 'На сколько оцените его?', '');

personalMovieDB.movies[a] = b;    // a и с Записывать обязательно с помощью [] ! чтобы получить корректный вывод значения (название фильма) 
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB);