import gulp from 'gulp';

import './build';
import './sass';
// import './test';
import './serve';
import './watch';

gulp.task('tdd', gulp.series('build', 'sass', 'serve', 'watch'));
// gulp.task('tdd', gulp.series('test', 'serve', 'watch'));
