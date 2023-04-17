let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Який останній фільм ви дивились?", "");
  let b = prompt("Оцініть його від 1 до 5", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 5 && b.length < 5) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  };
};

if (personalMovieDB.count < 10) {
  console.log("Ви дивитесь мало фільмів");
} else if (personalMovieDB.count < 20) {
  console.log("Не поганий результат");
} else {
  console.log("Та ви кіноман!");
};

console.log(personalMovieDB);

