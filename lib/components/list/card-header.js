'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = function CardHeader(_ref) {
  var item = _ref.item,
      _ref$ui = _ref.ui,
      ui = _ref$ui === undefined ? {} : _ref$ui,
      addClass = _ref.addClass;
  var switches = ui.switches,
      InputComponent = ui.InputComponent,
      itemUi = ui.itemUi,
      noItemUi = ui.noItemUi;


  return _react2.default.createElement(
    'div',
    { className: 'card-header' },
    switches && switches.map(function (Component, i) {
      return _react2.default.createElement(Component, {
        key: 'switch-' + i
      });
    }),
    item && _react2.default.createElement(_item2.default, {
      item: item,
      ui: itemUi,
      addClass: addClass
    }),
    !item && noItemUi && noItemUi.map(function (Component, i) {
      return _react2.default.createElement(Component, {
        key: 'button-' + i
      });
    }),
    InputComponent && _react2.default.createElement(InputComponent, null)
  );
};

CardHeader.propTypes = {
  item: _proptypes.itemPropType
};

exports.default = CardHeader;
module.exports = exports['default'];