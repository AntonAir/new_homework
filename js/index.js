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

  if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("nice!");
  } else {
    console.log("error");
    i--;
  };
};

if (personalMovieDB.count < 10) {
  console.log("Ви дивитесь мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Ви гарний глядач");
} else if (personalMovieDB.count > 30) {
  console.log("Nice!");
} else {
  console.log("Error");
};



console.log(personalMovieDB.movies);
