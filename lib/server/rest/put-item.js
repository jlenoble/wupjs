'use strict';

var _expressInstance = require('../express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.put('/api/items/:id', function (req, res) {
  var _id = req.params.id;
  var title = req.body.title;

  if (_id !== req.body._id) {
    return res.json({
      status: 400,
      message: 'uri and data ids don\'t match'
    });
  }

  _db.Item.update({ _id: _id }, { $set: { title: title } }, function (err) {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error'
      });
    }

    res.json({ _id: _id, title: title });
  });
});