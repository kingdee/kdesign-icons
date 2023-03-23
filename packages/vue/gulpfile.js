import gulp from 'gulp'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

gulp.task('build',()=> {
    gulp.src('src/index.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({suffix:'min'}))
    .pipe(gulp.dest('dist'))
})