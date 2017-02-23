'use strict';

var _expressInstance = require('../express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.delete('/api/items/:id', function (req, res) {
  var _id = req.params.id;

  _db.Item.remove({ _id: _id }, function (err) {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error'
      });
    }

    res.json({ _id: _id });
  });
});