'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphButton = function GlyphButton(_ref) {
  var glyphicon = _ref.glyphicon,
      onClick = _ref.onClick,
      addClass = _ref.addClass;
  return _react2.default.createElement(
    'button',
    {
      className: (0, _classnames2.default)('btn btn-secondary', addClass),
      onClick: onClick
    },
    _react2.default.createElement('i', { className: 'fa fa-' + glyphicon })
  );
};

GlyphButton.propTypes = {
  glyphicon: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  addClass: _react.PropTypes.string
};

exports.default = GlyphButton;
module.exports = exports['default'];