'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('./proptypes');

var _glyphButtonGroup = require('../presentational/glyph-button-group');

var _glyphButtonGroup2 = _interopRequireDefault(_glyphButtonGroup);

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
        _glyphButtonGroup2.default,
        { addClass: 'col justify-content-end' },
        buttonComponents
      )
    )
  );
};

ViewItemGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired,
  ui: _react.PropTypes.shape({
    buttons: _react.PropTypes.array.isRequired,
    checkboxes: _react.PropTypes.array.isRequired
  })
};

ViewItemGroup.defaultProps = {
  ui: {
    buttons: [],
    checkboxes: []
  }
};

exports.default = ViewItemGroup;
module.exports = exports['default'];