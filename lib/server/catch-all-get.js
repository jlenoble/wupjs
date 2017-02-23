'use strict';

var _reactRouter = require('react-router');

var _expressInstance = require('./express-instance');

var _expressInstance2 = _interopRequireDefault(_expressInstance);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _makeMarkup = require('./make-markup');

var _makeMarkup2 = _interopRequireDefault(_makeMarkup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expressInstance2.default.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    return res.render('index', {
      markup: (0, _makeMarkup2.default)(renderProps)
    });
  });
});