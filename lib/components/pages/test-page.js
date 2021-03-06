'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _content = require('../layouts/content');

var _content2 = _interopRequireDefault(_content);

var _allItemsCard = require('../cards/all-items-card');

var _allItemsCard2 = _interopRequireDefault(_allItemsCard);

var _allSelectionsCard = require('../cards/all-selections-card');

var _allSelectionsCard2 = _interopRequireDefault(_allSelectionsCard);

var _currentSelectionCard = require('../cards/current-selection-card');

var _currentSelectionCard2 = _interopRequireDefault(_currentSelectionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _content2.default,
    null,
    _react2.default.createElement(_allItemsCard2.default, null),
    _react2.default.createElement(_currentSelectionCard2.default, null),
    _react2.default.createElement(_allSelectionsCard2.default, null)
  );
};

module.exports = exports['default'];