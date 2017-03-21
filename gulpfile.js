var gulp = require ('gulp');
var gutil = require ('gulp-util');
var gconcat = require ('gulp-concat');
var browserify = require ("gulp-browserify");
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var htmlmin = require('gulp-htmlmin');

//set the vars and assign directories based on dev or production
var env,
    jsDir,
    sassDir,
    htmlDir,
    outputDir


//env variable assumes that it is in development mode unless otherwise declared
env = process.env.NODE_ENV || 'development';

if (env === 'development'){
  // if the env var is development send files to this directory
 outputDir = "./builds/development/";
 sassStyle = 'expanded';
} else {
  //else send to public folder
 outputDir = "./builds/public/";
 sassStyle = 'compressed';
}

//create a array of javascript sources
jsDir = [
  //add all the directories that contain javascript files
  //order of processing is the same as the order of items in this array
  './components/scripts/index.js',
  './components/scripts/myScripts.js'
];

sassDir = ['./components/sass/style.scss'];
htmlDir = [outputDir + '*.html'];


//connect to server and live reload task
gulp.task('connect', function() {
  connect.server({
    //dir with gulpfile
    root: outputDir,
    //specify port
    port: 8800,
    //liveReload True or False
    livereload: true
  });
});

//keep track of html and reload on change
gulp.task('html',function(){
  gulp.src(htmlDir)
  .pipe(connect.reload());
});

//minify html
gulp.task('minify', function() {
    //source file
    gulp.src('./builds/development/*.html')
    // pipe the file to the htmlmin package
    .pipe(htmlmin({collapseWhitespace: true}))
    //destination folder
    .pipe(gulp.dest('./builds/public'));
});

//sass files [processed by compass]
gulp.task('compass',function(){
  //source of sass files
  gulp.src(sassDir)
  //piped to compass
  .pipe(compass({
      //compass configuration
      //need to point compass to the sass dir
      sass: './components/sass/',
      //point the css to the development directory as compass cannot output css directly.
      css: outputDir + 'css',
      //any modules that you want to add to the sass pipeline
      require: ['susy'],
      //how you want the sass to be input to the css file
      style: sassStyle
  })
  //if there's an error -- pipe it to the console:
  .on('error',gutil.log))
  //sent to the css directory
  .pipe(gulp.dest(outputDir + 'css'))
  //reload the page once something changes in the sass folders
  .pipe(connect.reload())
});


// javascript files
gulp.task('js', function(){
  //concat of javascripts
  //pass the gulp file the sources array
  gulp.src(jsDir)
   //pipe the javascript files in js array to a file called script.js
   .pipe(gconcat('script.js'))
   //pass the script.js through the browserify plug in
   .pipe(browserify())
   //if the env variable is set to prodction, uglify the js
   .pipe(gulpif(env === 'production',uglify()))
   //log js error
   .on('error', gutil.log)
   //set the destination of the target file
   .pipe(gulp.dest(outputDir + 'js'))
   //reload the page once something changes in the js folders
   .pipe(connect.reload())
});

//lint JS for errors
gulp.task('lint', function() {
  return gulp.src('./components/scripts/myScripts.js')
    //pipe the jshint config file
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

//copy assets dir
gulp.task('copy', function(){
    gulp.src(["./builds/development/assets/*","./builds/development/assets/*.*","./builds/development/assets/**/*.*"])
    .pipe(gulpif(env === 'production',gulp.dest("./builds/public/assets/")))
});

// watch these files and when something changes
gulp.task('watch',function(){
  //specify the files to watch
  //when any html file in the development dir is changed
  gulp.watch(outputDir + '*.html',['html','minify']);
  //when any file ending in .scss changes run the compass task automatically
  gulp.watch('components/sass/*.scss',['compass']);
  //when something in the js files change, run js task
  gulp.watch(jsDir,['js','lint']);
});

//hook these commands to default gulp task
gulp.task('default',['html', 'minify', 'compass','js','copy','lint','connect','watch']);
