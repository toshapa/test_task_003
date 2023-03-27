
const gulp = require('gulp');
const watch = require ('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('browser-sync', () =>  {
    browserSync.init({
        browser: "google chrome",
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', () => {
    return gulp.src('src/css/scss/**/*.+(scss|sass)')
    
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
        prefix: '',
        suffix: '.min'
    }))
    .pipe(autoprefixer(
            {overrideBrowserslist:  ['last 2 versions'],
            cascade: false}
        ))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

gulp.task('watch', () => {
    gulp.watch('src/css/scss/**/*.scss', gulp.parallel('styles')).on('change', browserSync.reload)
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', { events: 'all' }).on('change', browserSync.reload);
    
})

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'styles'));
