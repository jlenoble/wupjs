import gulp from 'gulp';

import './test';
import './serve';
import './watch';

gulp.task('tdd', gulp.series('test', 'serve', 'watch'));
