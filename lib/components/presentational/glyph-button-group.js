'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphButtonGroup = function GlyphButtonGroup(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('btn-group', addClass), role: 'group' },
    children
  );
};

GlyphButtonGroup.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react.PropTypes.element.isRequired, _react.PropTypes.arrayOf(_react.PropTypes.element.isRequired).isRequired]).isRequired,
  addClass: _react.PropTypes.string
};

exports.default = GlyphButtonGroup;
module.exports = exports['default'];