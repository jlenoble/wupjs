'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var items = _ref.items,
      ui = _ref.ui;
  return _react2.default.createElement(
    'ul',
    { className: 'list-group' },
    items.map(function (item) {
      return _react2.default.createElement(_item.ListItem, {
        key: item._id,
        item: item,
        ui: ui
      });
    })
  );
};

List.propTypes = {
  items: _proptypes.itemsPropType.isRequired
};

exports.default = List;
module.exports = exports['default'];