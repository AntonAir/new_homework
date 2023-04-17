"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");
  };
};

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Який останній фільм ви дивились?", "");
    let b = prompt("Оцініть цей фільм від 1 до 5", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 20 && b.length < 20) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    };
  };
};

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Мало");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log("Не погано");
  } else if (personalMovieDB.count > 30) {
    console.log("COOL");
  } else {
    console.log("ERROR");
  };
};

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB["privat"] == false) {
    console.log(personalMovieDB);
  };
};

showMyDB();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let a = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    let b = i;

    if (a == "" || a == null || a.length < 5) {
      i--;
    } else {
      personalMovieDB.genres[(b)] = a;
      b++;
    };
  };
};

writeYourGenres();




