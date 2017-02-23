'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeMarkup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _pageNotFound = require('../components/pages/page-not-found');

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeMarkup(renderProps) {
  var markup = void 0;
  if (renderProps) {
    markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      _react2.default.createElement(_reactRouter.RouterContext, renderProps)
    ));
  } else {
    markup = (0, _server.renderToString)(_react2.default.createElement(_pageNotFound2.default, null));
    res.status(404);
  }
  return markup;
}
module.exports = exports['default'];