'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilms = prompt('Один из последних просмотренных фильмов?', '');
            const rankFilms = prompt('На сколько его оцените?', '');
        
            if (lastFilms != null && rankFilms != null && lastFilms != '' && rankFilms != '' && lastFilms.length < 50) {
                personalMovieDB.movies[lastFilms] = rankFilms;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (10 < personalMovieDB.count && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (30 < personalMovieDB.count) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i}?`);

            if (genres != null && genres != '') {
                personalMovieDB.genres.push(genres);
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
            
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function() {
        if (personalMovieDB.privat !== true) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();

