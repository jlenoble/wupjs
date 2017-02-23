'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oneRow = require('./one-row');

var _oneRow2 = _interopRequireDefault(_oneRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'container-fluid' },
    _react2.default.createElement(
      _oneRow2.default,
      null,
      children
    )
  );
};

module.exports = exports['default'];