const browsersync = require("browser-sync");
const { src, dest, parallel, series, watch, task } = require("gulp");
const source = require('vinyl-source-stream')
const babelify = require('babelify');
const watchify = require('watchify');
const browserify = require('browserify');
const assign = require('lodash.assign');
const autoprefixer = require('gulp-autoprefixer');
const changed = require("gulp-changed");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const { log } = require("gulp-clean/utils");
const rename = require('gulp-rename')

const customOptions = {
    entries: ['./src/js/index.js'],
    debug: true
}

const options = assign({}, watchify.args, customOptions);
const bundler = watchify(browserify(options))

function bundle() {
    return bundler
        .transform(babelify.configure({ presets: ['@babel/preset-env'] }))
        .bundle()
        .on('error', log.error.bind(log, "Browserify Error"))
        .pipe(source('./src/js/index.js'))
        .pipe(rename('stories.js'))
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function clear() {
    return src('./build', {
        read: false,
    })
        .pipe(clean())
}

function html() {
    return src('./src/index.html')
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function css() {
    const source = './src/scss/index.scss'

    return src(source)
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('stories.css'))
        .pipe(dest('./build'))
        .pipe(browsersync.stream())
}

function images() {
    return src(['./src/assets/images/*/*.jpg', './src/assets/images/*.svg'])
        .pipe(dest('./build/assets/images'))
};

function fonts() {
    return src('./src/assets/fonts/*')
        .pipe(dest('./build/assets/fonts'))
}

function watchFiles() {
    watch('./src/*.html', html)
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', bundle);
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
task('js', bundle);
bundler.on('update', bundle)
bundler.on('log', log.info)

task("images", images);
task("fonts", fonts);
task('watch', browserSync);
task('build', series(clear, html, parallel(css, bundle, fonts, images)));
task('dev', series('build', 'watch'))