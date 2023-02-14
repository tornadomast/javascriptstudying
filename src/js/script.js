"use strict";

let numberOfFilms;
 
function start() {
  numberOfFilms = +prompt('Скільки фiльмів ви подивились?', '');
  while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
    numberOfFilms = +prompt('Скільки фiльмів ви подивились?', '');
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true

};
 
function rememberMyFilms() {
  for (let i=0; i<1; i++) {
    const a = prompt('Один із останніх фільмів які подивились?', '').trim(),
          b = prompt('Оцініть його');
          if (a == null || b == null || a == '' || b == '' || a.length > 10) {
            i--;
            console.log('error');
          } else {
            personalMovieDB.movies[a]=b;
            console.log('done');
          }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Переглянуто мало фільмів');
  } else if (personalMovieDB.count >=  10 && personalMovieDB <= 30) {
    console.log('Ви класичний кіноглядач');
  } else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман');
  } else {
    console.log('error');
  }
}

detectPersonalLevel();

function showMyDb () {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDb();

function writeYouGenres() {
  for (let i = 1; i<=3; i++) {
    const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
    personalMovieDB.genres[i-1] = genre;
  }
}

writeYouGenres();
console.log(personalMovieDB); 

