'use strict';

var _expressInstance = require('./server/express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

require('./server/rest');

require('./server/catch-all-get');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.listen(5000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started on port 5000');
  }
});