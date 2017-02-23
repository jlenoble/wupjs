'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appRoutes = require('./components/app-routes');

var _appRoutes2 = _interopRequireDefault(_appRoutes);

var _reactRedux = require('react-redux');

var _store = require('./server/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = function Store() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_appRoutes2.default, null)
  );
};

exports.default = Store;
module.exports = exports['default'];