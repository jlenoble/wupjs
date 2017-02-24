'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('./proptypes');

var _buttonGroup = require('../presentational/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeButtonComponent = function makeButtonComponent(Component, item, key) {
  return _react2.default.createElement(Component, {
    item: item,
    key: key
  });
};

var makeCheckboxComponent = function makeCheckboxComponent(Component, item, key) {
  return _react2.default.createElement(Component, {
    addClass: 'col',
    item: item,
    key: key
  });
};

var makeButtonComponents = function makeButtonComponents(Components, item) {
  return Components.map(function (Component, i) {
    return makeButtonComponent(Component, item, i);
  });
};

var makeCheckboxComponents = function makeCheckboxComponents(Components, item) {
  return Components.map(function (Component, i) {
    return makeCheckboxComponent(Component, item, i);
  });
};

var ViewItemGroup = function ViewItemGroup(_ref) {
  var item = _ref.item,
      _ref$ui = _ref.ui,
      buttons = _ref$ui.buttons,
      checkboxes = _ref$ui.checkboxes;

  var _item = Object.assign({
    isSelected: false,
    isScheduled: false
  }, item);

  var buttonComponents = makeButtonComponents(buttons, _item);
  var checkboxComponents = makeCheckboxComponents(checkboxes, _item);

  return _react2.default.createElement(
    'div',
    { className: 'col' },
    _react2.default.createElement(
      'span',
      { className: 'row vertical-align' },
      checkboxComponents,
      _react2.default.createElement(
        'span',
        { className: 'col' },
        _item.title
      ),
      _react2.default.createElement(
        _buttonGroup2.default,
        { addClass: 'col justify-content-end' },
        buttonComponents
      )
    )
  );
};

ViewItemGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired,
  ui: _proptypes.itemUiPropType
};

ViewItemGroup.defaultProps = _proptypes.itemUiDefaultProps;

exports.default = ViewItemGroup;
module.exports = exports['default'];