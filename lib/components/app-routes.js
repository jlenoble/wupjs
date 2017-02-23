'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoutes = function (_Component) {
  _inherits(AppRoutes, _Component);

  function AppRoutes() {
    _classCallCheck(this, AppRoutes);

    return _possibleConstructorReturn(this, (AppRoutes.__proto__ || Object.getPrototypeOf(AppRoutes)).apply(this, arguments));
  }

  _createClass(AppRoutes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouter.Router, {
        history: _reactRouter.browserHistory,
        routes: _routes2.default,
        onUpdate: function onUpdate() {
          return window.scrollTo(0, 0);
        }
      });
    }
  }]);

  return AppRoutes;
}(_react.Component);

exports.default = AppRoutes;
module.exports = exports['default'];