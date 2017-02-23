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

var _itemButtons = require('./item-buttons');

var _itemCheckboxes = require('./item-checkboxes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item row' },
    item.isBeingEdited ? _react2.default.createElement(_itemInputGroups.ModifyItemInputGroup, { item: item }) : _react2.default.createElement(_viewItemGroup2.default, {
      item: item,
      ui: {
        buttons: [_itemButtons.EditItemButton, _itemButtons.RemoveItemButton],
        checkboxes: [_itemCheckboxes.SelectItemCheckbox, _itemCheckboxes.ScheduleItemCkeckbox]
      }
    })
  );
};

Item.propTypes = {
  item: _proptypes.itemPropType.isRequired
};

exports.default = Item;
module.exports = exports['default'];