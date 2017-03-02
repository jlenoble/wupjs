'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _proptypes = require('./proptypes');

var _itemInputGroups = require('./item-input-groups');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardHeader = function (_Component) {
  _inherits(CardHeader, _Component);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: 'renderUiSwitches',
    value: function renderUiSwitches() {
      var _props$ui = this.props.ui,
          ui = _props$ui === undefined ? {} : _props$ui;
      var switches = ui.switches;

      return switches && switches.map(function (Component, i) {
        return _react2.default.createElement(Component, {
          key: 'switch-' + i
        });
      });
    }
  }, {
    key: 'renderNoItemUi',
    value: function renderNoItemUi() {
      var _props = this.props,
          _props$item = _props.item,
          item = _props$item === undefined ? {} : _props$item,
          _props$ui2 = _props.ui,
          ui = _props$ui2 === undefined ? {} : _props$ui2;
      var noItemUi = ui.noItemUi;

      return !item._id && !item.isBeingNamed && noItemUi && noItemUi.map(function (Component, i) {
        return _react2.default.createElement(Component, {
          key: 'button-' + i
        });
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem() {
      var _props2 = this.props,
          _props2$item = _props2.item,
          item = _props2$item === undefined ? {} : _props2$item,
          _props2$ui = _props2.ui,
          ui = _props2$ui === undefined ? {} : _props2$ui,
          addClass = _props2.addClass;
      var itemUi = ui.itemUi;


      return item._id && _react2.default.createElement(_item2.default, {
        item: item,
        ui: itemUi,
        addClass: addClass
      });
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props3 = this.props,
          _props3$item = _props3.item,
          item = _props3$item === undefined ? {} : _props3$item,
          _props3$ui = _props3.ui,
          ui = _props3$ui === undefined ? {} : _props3$ui;
      var InputComponent = ui.InputComponent;

      return InputComponent && _react2.default.createElement(InputComponent, null) || item.isBeingNamed && _react2.default.createElement(_itemInputGroups.NameSelectionInputGroup, null);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-header' },
        this.renderUiSwitches(),
        this.renderItem(),
        this.renderNoItemUi(),
        this.renderInput()
      );
    }
  }]);

  return CardHeader;
}(_react.Component);

CardHeader.propTypes = {
  item: _proptypes.itemPropType
};

exports.default = CardHeader;
module.exports = exports['default'];