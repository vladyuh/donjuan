const gulp = require("gulp");
const log = require("fancy-log");
const critical = require("critical").stream;

// Generate & Inline Critical-path CSS
gulp.task("critical", () => {
    return gulp
        .src("dist/*.html")
        .pipe(
            critical({
                base: "src/",
                src: "dist/*.html",
            })
        )
        .on("error", err => {
            log.error(err.message);
        })
        .pipe(gulp.dest("src/styles/critical"));
});