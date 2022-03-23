"use strict";

let numberOfFilms;

function start() {
    numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?','');
    }
    
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms (){
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько вы его оцените?', '');   
        if(a.length != null && b.length != null && a != '' && b != '' && a.length < 50){
           personalMovieDB.movies[a] = b;
           console.log('done');
        } else {
           alert('Обязательно заполните строку');
           i--;
        }
   }
}
rememberMyFilms();

function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    }else if (personalMovieDB > 10 && personalMovieDB < 30){
        console.log('Вы классический зритель');
    }else {
        console.log('Вы киноман');
    }
}

detectPersonalLevel();

function writeYourGenre( hidding){
    for (let i = 1; i <= 3; i++){
        const question = prompt(`Ваш любимый жанр по номером ${i}`);
        if(question != null){
            hidding[i-1] = question; 
        }
    }
}

writeYourGenre(personalMovieDB.genres);


