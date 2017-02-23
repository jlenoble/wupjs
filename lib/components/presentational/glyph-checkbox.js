"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphCheckbox = function GlyphCheckbox(_ref) {
  var onChange = _ref.onChange,
      addClass = _ref.addClass,
      checked = _ref.checked,
      exposeInputNode = _ref.exposeInputNode;
  return _react2.default.createElement(
    "span",
    { className: "glyph-checkbox" },
    _react2.default.createElement("input", {
      type: "checkbox",
      className: addClass,
      onChange: onChange,
      checked: checked,
      ref: function ref(node) {
        exposeInputNode(node);
      }

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
module.exports = exports["default"];