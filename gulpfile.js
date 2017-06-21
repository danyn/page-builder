var   gulp = require('gulp'),
      concat = require('gulp-concat'),
    



var schemaJSON  = [
    'project/snippets/section/page-builder-open.liquid',
    'project/snippets/block/button-text/schema.json',
    'project/snippets/section/page-builder-close.liquid'
];

var templating  = [
    'project/snippets/section/template-open.liquid',
    'project/snippets/block/button-text/template.liquid',
    'project/snippets/section/template-close.liquid'
];


//gulp.task('name', function(){});

gulp.task('schema', function(){
    return gulp.src(schemaJSON)
          .pipe(concat('page-builder.liquid'))
          .pipe(gulp.dest('project/build'));
});

gulp.task('template', function(){
    return gulp.src(templating)
          .pipe(concat('page-builder-snippet.liquid'))
          .pipe(gulp.dest('project/build'));
});


gulp.task('watch' ,function(){
      gulp.watch(schemaJSON,['schema']);
      gulp.watch(templating,['template']);

});



gulp.task('default', ['schema','template','watch']);


