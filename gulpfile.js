const gulp = require('gulp');
const rsync = require('gulp-rsync');

gulp.task('deploy', function() {
    return gulp.src("./build/**/*")
        .pipe(rsync({
            root: "build/",
            hostname: "13.229.95.250",
            destination:"/opt/user-api/",
            username: "hoangbd",
            port: 2222
        }));
});