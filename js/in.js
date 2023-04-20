"use strict";


function second() {
  console.log(2);
};


function first(callback) {
  setTimeout(function () {
    console.log(1);
  }, 500);
  callback();
};



first(second);


// function learnJS(lang, callbeck) {
//   console.log(`Я вивчаю ${lang}`);
//   callbeck();
// };

// learnJS("Якусь фігню", function () {
//   console.log(31);
// });