var   gulp = require('gulp'),
      concat = require('gulp-concat');
    



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

gulp.task('build_schema', function(){
    return gulp.src(schemaJSON)
          .pipe(concat('page-builder.liquid'))
          .pipe(gulp.dest('project/build'));
});

gulp.task('build_template', function(){
    return gulp.src(templating)
          .pipe(concat('page-builder-snippet.liquid'))
          .pipe(gulp.dest('project/build'));
});


gulp.task('watch' ,function(){
      gulp.watch(schemaJSON,['build_schema']);
      gulp.watch(templating,['build_template']);

});



gulp.task('default', ['build_schema','build_template','watch']);


