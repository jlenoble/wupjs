'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('../list/item');

var _item2 = _interopRequireDefault(_item);

var _proptypes = require('../list/proptypes');

var _addGroup = require('../groups/add-group');

var _addGroup2 = _interopRequireDefault(_addGroup);

var _createGroup = require('../groups/create-group');

var _createGroup2 = _interopRequireDefault(_createGroup);

var _nameGroup = require('../groups/name-group');

var _nameGroup2 = _interopRequireDefault(_nameGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = function CardHeader(_ref) {
  var item = _ref.item,
      ui = _ref.ui;

  return _react2.default.createElement(
    'div',
    { className: 'card-header' },
    ui.create && _react2.default.createElement(_createGroup2.default, null),
    ui.name && _react2.default.createElement(_nameGroup2.default, null),
    ui.title && _react2.default.createElement(_item2.default, {
      item: item,
      ui: ui.itemUi
    }),
    ui.add && _react2.default.createElement(_addGroup2.default, null)
  );
};

CardHeader.propTypes = {
  item: _proptypes.itemPropType,
  ui: _react.PropTypes.object
};

CardHeader.defaultProps = {
  ui: {}
};

exports.default = CardHeader;
module.exports = exports['default'];