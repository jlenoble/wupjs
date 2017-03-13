'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('./proptypes');

var _inlineItem = require('../layouts/inline-item');

var _inlineItem2 = _interopRequireDefault(_inlineItem);

var _selectGroup = require('../groups/select-group');

var _selectGroup2 = _interopRequireDefault(_selectGroup);

var _titleGroup = require('../groups/title-group');

var _titleGroup2 = _interopRequireDefault(_titleGroup);

var _editGroup = require('../groups/edit-group');

var _editGroup2 = _interopRequireDefault(_editGroup);

var _deleteGroup = require('../groups/delete-group');

var _deleteGroup2 = _interopRequireDefault(_deleteGroup);

var _removeGroup = require('../groups/remove-group');

var _removeGroup2 = _interopRequireDefault(_removeGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewItemGroup = function ViewItemGroup(_ref) {
  var item = _ref.item,
      _ref$ui = _ref.ui,
      ui = _ref$ui === undefined ? {} : _ref$ui;

  return _react2.default.createElement(
    _inlineItem2.default,
    null,
    ui.select && _react2.default.createElement(_selectGroup2.default, { item: item }),
    _react2.default.createElement(_titleGroup2.default, { item: item }),
    ui.edit && _react2.default.createElement(_editGroup2.default, { item: item }) || ui.delete && _react2.default.createElement(_deleteGroup2.default, { item: item }) || ui.remove && _react2.default.createElement(_removeGroup2.default, { item: item })
  );
};

ViewItemGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired,
  ui: _react.PropTypes.object
};

exports.default = ViewItemGroup;
module.exports = exports['default'];