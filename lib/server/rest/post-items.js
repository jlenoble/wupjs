'use strict';

var _expressInstance = require('../express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.post('/api/items', function (req, res) {
  var item = new _db.Item();
  item.title = req.body.title;

  item.save(function (err) {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error'
      });
    }

    res.json(item);
  });
});