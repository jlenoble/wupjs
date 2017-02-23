'use strict';

var _expressInstance = require('../express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.get('/api/items', function (req, res) {
  _db.Item.find({}, function (err, items) {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error'
      });
    }

    res.json(items);
  });
});