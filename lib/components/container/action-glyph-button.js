'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _glyphButton = require('../presentational/glyph-button');

var _glyphButton2 = _interopRequireDefault(_glyphButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionGlyphButton = function (_Component) {
  _inherits(ActionGlyphButton, _Component);

  function ActionGlyphButton() {
    _classCallCheck(this, ActionGlyphButton);

    return _possibleConstructorReturn(this, (ActionGlyphButton.__proto__ || Object.getPrototypeOf(ActionGlyphButton)).apply(this, arguments));
  }

  _createClass(ActionGlyphButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          handleClick = _props.handleClick,
          dispatch = _props.dispatch;


      this._handleClick = function () {
        handleClick(dispatch);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_glyphButton2.default, {
        glyphicon: this.props.glyphicon,
        onClick: this._handleClick
      });
    }
  }]);

  return ActionGlyphButton;
}(_react.Component);

ActionGlyphButton.propTypes = {
  handleClick: _react.PropTypes.func.isRequired,
  glyphicon: _react.PropTypes.string.isRequired
};

exports.default = (0, _reactRedux.connect)()(ActionGlyphButton);
module.exports = exports['default'];