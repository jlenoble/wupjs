'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemUiPropType = exports.itemsWithRequiredProps = exports.itemWithRequiredProps = exports.itemsPropType = exports.itemPropType = undefined;

var _react = require('react');

var requiredPropTypes = {
  title: _react.PropTypes.string.isRequired,
  _id: _react.PropTypes.string.isRequired
};

var itemPropType = exports.itemPropType = _react.PropTypes.shape(requiredPropTypes);
var itemsPropType = exports.itemsPropType = _react.PropTypes.arrayOf(itemPropType.isRequired);

var itemWithRequiredProps = exports.itemWithRequiredProps = function itemWithRequiredProps(props) {
  var _props = Object.assign({}, requiredPropTypes);
  Object.keys(props).forEach(function (key) {
    _props[key] = _react.PropTypes[props[key]].isRequired;
  });
  return _react.PropTypes.shape(_props);
};

var itemsWithRequiredProps = exports.itemsWithRequiredProps = function itemsWithRequiredProps(props) {
  return _react.PropTypes.arrayOf(itemWithRequiredProps(props).isRequired);
};

var itemUiPropType = exports.itemUiPropType = _react.PropTypes.shape({
  buttons: _react.PropTypes.arrayOf(_react.PropTypes.element.isRequired).isRequired,
  checkboxes: _react.PropTypes.arrayOf(_react.PropTypes.element.isRequired).isRequired
});