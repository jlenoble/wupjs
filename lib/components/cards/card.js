'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cardHeader = require('./card-header');

var _cardHeader2 = _interopRequireDefault(_cardHeader);

var _cardBlock = require('./card-block');

var _cardBlock2 = _interopRequireDefault(_cardBlock);

var _proptypes = require('../list/proptypes');

var _actions = require('../../actions');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _store.dispatch)((0, _actions.fetchItemsIfNeeded)());
      (0, _store.dispatch)((0, _actions.fetchSelectionsIfNeeded)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          items = _props.items,
          isFetching = _props.isFetching,
          headerUi = _props.headerUi,
          blockUi = _props.blockUi;


      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(_cardHeader2.default, {
          item: item,
          ui: headerUi
        }),
        _react2.default.createElement(_cardBlock2.default, {
          items: items,
          isFetching: isFetching,
          ui: blockUi
        })
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  items: _proptypes.itemsPropType.isRequired,
  item: _proptypes.itemPropType,
  isFetching: _react.PropTypes.bool,
  headerUi: _react.PropTypes.object,
  blockUi: _react.PropTypes.object
};

Card.defaultProps = {
  isFetching: false,
  headerUi: {},
  blockUi: {}
};

exports.default = Card;
module.exports = exports['default'];