'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewItemGroup = require('./view-item-group');

var _viewItemGroup2 = _interopRequireDefault(_viewItemGroup);

var _itemInputGroups = require('./item-input-groups');

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
  var item = _ref.item,
      ui = _ref.ui;
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item row' },
    item.isBeingEdited ? _react2.default.createElement(_itemInputGroups.ModifyItemInputGroup, { item: item }) : _react2.default.createElement(_viewItemGroup2.default, {
      item: item,
      ui: ui
    })
  );
};

Item.propTypes = {
  item: _proptypes.itemPropType.isRequired,
  ui: _proptypes.itemUiPropType.isRequired
};

exports.default = Item;
module.exports = exports['default'];