'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _wupjsGlyphInputText = require('wupjs-glyph-input-text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionGlyphInputGroup = function (_Component) {
  _inherits(ActionGlyphInputGroup, _Component);

  function ActionGlyphInputGroup() {
    _classCallCheck(this, ActionGlyphInputGroup);

    return _possibleConstructorReturn(this, (ActionGlyphInputGroup.__proto__ || Object.getPrototypeOf(ActionGlyphInputGroup)).apply(this, arguments));
  }

  _createClass(ActionGlyphInputGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          handleFocus = _props.handleFocus,
          handleSubmit = _props.handleSubmit,
          dispatch = _props.dispatch;


      if (handleFocus) {
        this._handleFocus = function () {
          handleFocus(dispatch);
        };
      }

      this._handleSubmit = function (e) {
        e.preventDefault();

        handleSubmit(_this2._inputNode, function () {
          _this2._inputNode.value = '';
        }, dispatch);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          placeholder = _props2.placeholder,
          glyphicon = _props2.glyphicon,
          autoFocus = _props2.autoFocus,
          defaultValue = _props2.defaultValue;


      return _react2.default.createElement(_wupjsGlyphInputText.GlyphInputText, {
        placeholder: placeholder,
        glyph: glyphicon,
        exposeInputNode: function exposeInputNode(inputNode) {
          _this3._inputNode = inputNode;
        },
        autoFocus: autoFocus,
        defaultValue: defaultValue,
        onFocus: this._handleFocus,
        onSubmit: this._handleSubmit
      });
    }
  }]);

  return ActionGlyphInputGroup;
}(_react.Component);

ActionGlyphInputGroup.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  glyphicon: _react.PropTypes.string.isRequired,
  handleFocus: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  defaultValue: _react.PropTypes.string
};

exports.default = (0, _reactRedux.connect)()(ActionGlyphInputGroup);
module.exports = exports['default'];