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

let q = prompt("Який останній фільм ви дивились?", "");
let x = prompt("Оцініть цей фільм від 1 до 5", "");
let q1 = prompt("Який останній фільм ви дивились?", "");
let x1 = prompt("Оцініть цей фільм від 1 до 5", "");

personalMovieDB.movies[q] = x;
personalMovieDB.movies[q1] = x1;

console.log(personalMovieDB);
