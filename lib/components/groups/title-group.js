'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('../list/proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleGroup = function TitleGroup(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    'span',
    null,
    item.title
  );
};

TitleGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired
};

exports.default = TitleGroup;
module.exports = exports['default'];