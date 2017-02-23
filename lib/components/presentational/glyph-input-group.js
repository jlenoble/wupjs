"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphInputGroup = function GlyphInputGroup(_ref) {
  var glyphicon = _ref.glyphicon,
      placeholder = _ref.placeholder,
      autoFocus = _ref.autoFocus,
      defaultValue = _ref.defaultValue,
      exposeInputNode = _ref.exposeInputNode,
      onFocus = _ref.onFocus,
      onSubmit = _ref.onSubmit;
  return _react2.default.createElement(
    "form",
    {
      className: "input-group",
      onFocus: onFocus,
      onSubmit: onSubmit
    },
    _react2.default.createElement("input", {
      type: "text",
      className: "form-control",
      placeholder: placeholder,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      ref: function ref(node) {
        exposeInputNode(node);
      }
    }),
    _react2.default.createElement(
      "span",
      { className: "input-group-btn" },
      _react2.default.createElement(
        "button",
        {
          type: "submit",
          className: "btn btn-secondary"
        },
        _react2.default.createElement("i", { className: "fa fa-" + glyphicon })
      )
    )
  );
};

GlyphInputGroup.propTypes = {
  glyphicon: _react.PropTypes.string.isRequired,
  exposeInputNode: _react.PropTypes.func.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  onFocus: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  defaultValue: _react.PropTypes.string
};

exports.default = GlyphInputGroup;
module.exports = exports["default"];