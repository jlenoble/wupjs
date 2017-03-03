'use strict';

var _expressInstance = require('../express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.post('/api/selections', function (req, res) {
  var selection = new _db.Selection();
  selection.itemId = req.body.itemId;
  selection.items = req.body.items;

  selection.save(function (err) {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error'
      });
    }

    res.json(selection);
  });
});