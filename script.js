"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

<<<<<<< HEAD
for (let i = 0; i < 2; i++) {
    
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько его оцените?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);

if (numberOfFilms < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (10 <= numberOfFilms && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
=======
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d =  prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
>>>>>>> b721b30faa825a64b883af3bddb13058075b0f19
