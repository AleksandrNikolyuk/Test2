"use strict";
// Импортируем зависимости которые используем при сборке
// npm install gulpjs/gulp#4.0 --save-dev

// Сам галп
const gulp = require('gulp');
// Расширение для дебага, вывод сообщений в потоке обработки
// Concat & Rename -> объединение файлов в один и ренейм
const browserSync = require('browser-sync').create();

gulp.task('serve', function(){
  browserSync.init({
    server: "public",
    port: 8081,
    ui: false
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload );
});

gulp.task('dev',
    gulp.parallel('serve')
);
