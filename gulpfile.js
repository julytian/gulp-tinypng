var gulp = require('gulp');
var tiny = require('gulp-tinypng-nokey');

gulp.task('default', function(cb) {
    gulp.src('images/*') // 图片源
        .pipe(tiny())
        .pipe(gulp.dest('dist')); // 输出源
});