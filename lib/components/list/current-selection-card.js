'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _actionGlyphButton = require('../container/action-glyph-button');

var _actionGlyphButton2 = _interopRequireDefault(_actionGlyphButton);

var _itemButtons = require('./item-buttons');

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
      this.props.dispatch((0, _actions.fetchItemsIfNeeded)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          isFetching = _props.isFetching;


      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-header' },
          _react2.default.createElement(_actionGlyphButton2.default, {
            glyphicon: 'save',
            handleClick: function handleClick(dispatch) {}
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          isFetching && items.length === 0 && _react2.default.createElement(
            'h2',
            null,
            'Loading...'
          ),
          !isFetching && items.length === 0 && _react2.default.createElement(
            'h2',
            null,
            'Empty.'
          ),
          items.length > 0 && _react2.default.createElement(_list2.default, {
            items: items,
            ui: {
              buttons: [_itemButtons.EditItemButton, _itemButtons.UnselectItemButton],
              checkboxes: []
            }
          })
        )
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  items: _react.PropTypes.array.isRequired,
  isFetching: _react.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  var props = Object.assign({}, state.items);
  var items = props.items;
  var selection = state.currentSelection.items;

  props.items = Object.keys(items).filter(function (_id) {
    return selection[_id];
  }).map(function (_id) {
    return Object.assign({
      isSelected: true
    }, items[_id]);
  });

  return props;
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Card);
module.exports = exports['default'];