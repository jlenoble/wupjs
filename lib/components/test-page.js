'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _allItemsCard = require('./list/all-items-card');

var _allItemsCard2 = _interopRequireDefault(_allItemsCard);

var _currentSelectionCard = require('./list/current-selection-card');

var _currentSelectionCard2 = _interopRequireDefault(_currentSelectionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'container-fluid' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col' },
        _react2.default.createElement(_allItemsCard2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'col' },
        _react2.default.createElement(_currentSelectionCard2.default, null)
      )
    )
  );
};

module.exports = exports['default'];