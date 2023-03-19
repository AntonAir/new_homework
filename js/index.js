"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

console.log(numberOfFilms);


let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  let a = prompt("Який останній фільм ви дивились?", "");
  let b = prompt("Оцініть цей фільм від 1 до 5", "");

  if (a != "" && b != "" && a != null && b != null && a.length < 20 && b.length < 20) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
};

if (personalMovieDB.count < 10) {
  console.log("Мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
  console.log("Не погано");
} else if (personalMovieDB.count > 30) {
  console.log("COOL");
} else {
  console.log("ERROR");
};


console.log(personalMovieDB);
