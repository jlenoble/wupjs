'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewItemGroup = require('../groups/view-item-group');

var _viewItemGroup2 = _interopRequireDefault(_viewItemGroup);

var _modifyGroup = require('../groups/modify-group');

var _modifyGroup2 = _interopRequireDefault(_modifyGroup);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getGroup = function getGroup(item, ui) {
  return item.isBeingEdited ? _react2.default.createElement(_modifyGroup2.default, { item: item }) : _react2.default.createElement(_viewItemGroup2.default, {
    item: item,
    ui: ui
  });
};

var Item = function Item(_ref) {
  var item = _ref.item,
      ui = _ref.ui,
      addClass = _ref.addClass;
  return _react2.default.createElement(
    'span',
    { className: addClass },
    getGroup(item, ui)
  );
};

var ListItem = function ListItem(_ref2) {
  var item = _ref2.item,
      ui = _ref2.ui;
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item' },
    getGroup(item, ui)
  );
};

Item.propTypes = ListItem.propTypes = {
  item: _proptypes.itemPropType.isRequired
};

exports.default = Item;
exports.ListItem = ListItem;