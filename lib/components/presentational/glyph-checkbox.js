'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphCheckbox = function GlyphCheckbox(_ref) {
  var onChange = _ref.onChange,
      addClass = _ref.addClass,
      glyphicon = _ref.glyphicon,
      checked = _ref.checked,
      exposeInputNode = _ref.exposeInputNode,
      itemId = _ref.itemId;

  var name = glyphicon + itemId;

  return _react2.default.createElement(
    'span',
    { className: 'glyph-checkbox' },
    _react2.default.createElement('input', {
      id: name,
      name: name,
      type: 'checkbox',
      onChange: onChange,
      checked: checked,
      ref: function ref(node) {
        exposeInputNode(node);
      }
    }),
    _react2.default.createElement('label', {
      htmlFor: name,
      className: (0, _classnames2.default)('fa fa-' + glyphicon, addClass)
    })
  );
};

GlyphCheckbox.propTypes = {
  exposeInputNode: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  addClass: _react.PropTypes.string,
  checked: _react.PropTypes.bool
};

exports.default = GlyphCheckbox;
module.exports = exports['default'];