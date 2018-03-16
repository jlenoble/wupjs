import gulp from 'gulp';

import './build';
import './sass';
import './bundle';
import './test';
import './serve';
import './watch';

// gulp.task('tdd', gulp.series('build', 'sass', 'bundle', 'serve', 'watch'));
gulp.task('tdd', gulp.series('test', 'serve', 'watch'));
