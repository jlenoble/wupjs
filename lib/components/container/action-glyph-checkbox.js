'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _glyphCheckbox = require('../presentational/glyph-checkbox');

var _glyphCheckbox2 = _interopRequireDefault(_glyphCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionGlyphCheckbox = function (_Component) {
  _inherits(ActionGlyphCheckbox, _Component);

  function ActionGlyphCheckbox() {
    _classCallCheck(this, ActionGlyphCheckbox);

    return _possibleConstructorReturn(this, (ActionGlyphCheckbox.__proto__ || Object.getPrototypeOf(ActionGlyphCheckbox)).apply(this, arguments));
  }

  _createClass(ActionGlyphCheckbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          handleChange = _props.handleChange,
          dispatch = _props.dispatch;


      this._handleChange = function () {
        handleChange(_this2._inputNode, dispatch);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          addClass = _props2.addClass,
          glyphicon = _props2.glyphicon,
          checked = _props2.checked,
          itemId = _props2.itemId;


      return _react2.default.createElement(_glyphCheckbox2.default, {
        glyphicon: glyphicon,
        addClass: addClass,
        exposeInputNode: function exposeInputNode(inputNode) {
          _this3._inputNode = inputNode;
        },
        onChange: this._handleChange,
        checked: checked,
        itemId: itemId
      });
    }
  }]);

  return ActionGlyphCheckbox;
}(_react.Component);

ActionGlyphCheckbox.propTypes = {
  handleChange: _react.PropTypes.func.isRequired,
  glyphicon: _react.PropTypes.string.isRequired,
  itemId: _react.PropTypes.string.isRequired,
  addClass: _react.PropTypes.string,
  checked: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)()(ActionGlyphCheckbox);
module.exports = exports['default'];