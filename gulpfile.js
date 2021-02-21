const browsersync = require("browser-sync");
const { src, dest, parallel, series, watch, task } = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const changed = require("gulp-changed");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const imagemin = require('gulp-imagemin');

function clear() {
    return src('./build', {
        read: false,
    })
        .pipe(clean())
}

function html() {
    return src('./src/*.html')
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function js() {
    const source = './src/js/*.js'

    return src(source)
        .pipe(changed(source))
        .pipe(concat('stories.js'))
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function css() {
    const source = './src/scss/index.scss'

    return src(source)
        .pipe(changed(source))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('stories.css'))
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function images() {
    return src(['./src/assets/images/*'])
        .pipe(imagemin())
        .pipe(dest('./build/assets/images/'))
        .pipe(browsersync.stream());
};

function fonts() {
    return src('./src/assets/fonts/*')
        .pipe(dest('./build/assets/fonts'))
}

function watchFiles() {
    watch('./src/*.html', html)
    watch('./src/scss/*', css);
    watch('./src/js/*', js);
    watch('./src/*.html').on("change", browsersync.reload)
}

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 8080
    });
}

watchFiles()

task('html', html)
task('css', css);
task('js', js);
task("images", images);
task("fonts", fonts);
task('watch', browserSync);
task('build', series(clear, html, parallel(css, js), fonts, images));
task('dev', series('build', 'watch'))