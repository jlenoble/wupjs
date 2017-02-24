'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _content = require('../layouts/content');

var _content2 = _interopRequireDefault(_content);

var _itemsCards = require('../list/items-cards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _content2.default,
    null,
    _react2.default.createElement(_itemsCards.AllItemsCard, null),
    _react2.default.createElement(_itemsCards.CurrentSelectionCard, null),
    _react2.default.createElement(_itemsCards.AllSelectionsCard, null)
  );
};

module.exports = exports['default'];