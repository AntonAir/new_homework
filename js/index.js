"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
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
    let a = prompt("Який останній фільм ви дивились?", "").trim();
    let b = prompt("Оцініть його від 1 до 5", "").trim();

    if (a != null && b != null && a != "" && b != "" && a.length < 5 && b.length < 5) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    };
  };
};

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Ви дивитесь мало фільмів");
    } else if (personalMovieDB.count < 20) {
      console.log("Не поганий результат");
    } else {
      console.log("Та ви кіноман!");
    };
};

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  };
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Який ваш улюблений жанр кіно під номером ${i}?`, "");
  };
};

writeYourGenres();

