const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

 style = () =>{
     return gulp.src([
         './scss/style.scss'
         ])
     .pipe(sass())
     .pipe(gulp.dest('./css'))
     .pipe(browserSync.stream());
 };

  js = () => {
     return gulp.src([
         'node_modules/jquery/dist/jquery.min.js',
         'node_modules/tooltipster/dist/js/tooltipster.bundle.min.js',
         'node_modules/image-map-resizer/js/imageMapResizer.min.js',
         ])
     .pipe(gulp.dest('./js'))
     .pipe(browserSync.stream());
 };

  watch = () =>{
     browserSync.init({
         server: {
             baseDir: './'
         }
     });
     gulp.watch('./scss/*.scss', style);
     gulp.watch('./css/*.css', style);
     gulp.watch('./src/*html').on('change', browserSync.reload);
 };

 gulp.task('build', 
     gulp.parallel(style, js))
 gulp.task('default',
     gulp.series('build', watch))