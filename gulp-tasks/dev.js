import gulp from 'gulp';
import runSequence from 'run-sequence';
import gulpHelp from 'gulp-help';
import server from 'gulp-develop-server';

gulpHelp(gulp);

const config = {
  mainPath: 'dev/index.js',
  watchFiles: [
    'lib/**/*.js',
    '!lib/**/*.spec.js',
    'dev/**/*.js',
  ],
};

gulp.task('dev:start', false, () => {
  server.listen({ path: config.mainPath });
});

gulp.task('dev:watch', false, () => {
  gulp.watch(config.watchFiles, server.restart);
});

gulp.task('dev', 'Start development server', (callback) => {
  runSequence(
    'dev:start',
    'dev:watch',
    callback);
});
