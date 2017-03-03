'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllSelectionsCard = exports.AllItemsCard = exports.CurrentSelectionCard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _cardBlock = require('./card-block');

var _cardBlock2 = _interopRequireDefault(_cardBlock);

var _itemInputGroups = require('./item-input-groups');

var _itemButtons = require('./item-buttons');

var _itemCheckboxes = require('./item-checkboxes');

var _helpers = require('../../helpers');

var _cardHeader = require('./card-header');

var _cardHeader2 = _interopRequireDefault(_cardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var makeCard = function makeCard(_ref) {
  var mapStateToProps = _ref.mapStateToProps,
      headerUi = _ref.headerUi,
      itemUi = _ref.itemUi;

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
        this.props.dispatch((0, _actions.fetchSelectionsIfNeeded)());
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            item = _props.item,
            items = _props.items,
            isFetching = _props.isFetching;


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
            ui: itemUi
          })
        );
      }
    }]);

    return Card;
  }(_react.Component);

  Card.propTypes = {
    items: _react.PropTypes.array.isRequired,
    isFetching: _react.PropTypes.bool.isRequired
  };

  return (0, _reactRedux.connect)(mapStateToProps)(Card);
};

var checkIfEditedItem = function checkIfEditedItem(item, card, _ref2) {
  var _id = _ref2._id,
      isBeingEdited = _ref2.isBeingEdited,
      cardName = _ref2.cardName;

  return isBeingEdited && item._id === _id && card.name === cardName;
};

var CurrentSelectionCard = makeCard({
  headerUi: {
    noItemUi: [_itemButtons.SaveCurrentSelectionButton],
    itemUi: {
      buttons: [_itemButtons.EditItemButton],
      checkboxes: []
    }
  },
  itemUi: {
    buttons: [_itemButtons.EditItemButton, _itemButtons.UnselectItemButton],
    checkboxes: []
  },
  mapStateToProps: function mapStateToProps(state) {
    var props = Object.assign({}, state.items);
    var items = props.items;
    var selection = state.currentSelection.items;

    var item = Object.assign({}, state.currentSelection.item);
    if (item._id) {
      item = Object.assign({}, items[item._id]);
    }
    item.isBeingNamed = state.currentSelection.isBeingNamed;
    item.isBeingEdited = checkIfEditedItem(item, CurrentSelectionCard, state.currentItem);
    item.cardName = CurrentSelectionCard.name;

    props.items = Object.keys(items).filter(function (key) {
      return selection[key];
    }).map(function (key) {
      var item = items[key];
      return Object.assign({
        isBeingEdited: checkIfEditedItem(item, CurrentSelectionCard, state.currentItem),
        isSelected: true,
        cardName: CurrentSelectionCard.name
      }, item);
    });

    props.item = item;

    return props;
  }
});

var AllItemsCard = makeCard({
  headerUi: {
    InputComponent: _itemInputGroups.AddItemInputGroup,
    switches: []
  },
  itemUi: {
    buttons: [_itemButtons.EditItemButton, _itemButtons.DeleteItemButton],
    checkboxes: [_itemCheckboxes.SelectItemCheckbox, _itemCheckboxes.ScheduleItemCkeckbox]
  },
  mapStateToProps: function mapStateToProps(state) {
    var props = Object.assign({}, state.items);
    var items = props.items;
    var selection = state.currentSelection.items;

    props.items = Object.keys(items).map(function (key) {
      var item = items[key];
      return Object.assign({
        isBeingEdited: checkIfEditedItem(item, AllItemsCard, state.currentItem),
        isSelected: selection[item._id] ? true : false,
        cardName: AllItemsCard.name
      }, item);
    });

    return props;
  }
});

var AllSelectionsCard = makeCard({
  mapStateToProps: function mapStateToProps(state) {
    var props = Object.assign({}, state.items);
    var items = props.items;
    var selections = state.selections.items;

    props.items = Object.keys(selections).map(function (_id) {
      return items[selections[_id].itemId];
    });

    return props;
  }
});

(0, _helpers.setFuncName)(CurrentSelectionCard, 'CurrentSelectionCard');
(0, _helpers.setFuncName)(AllItemsCard, 'AllItemsCard');
(0, _helpers.setFuncName)(AllSelectionsCard, 'AllSelectionsCard');

exports.CurrentSelectionCard = CurrentSelectionCard;
exports.AllItemsCard = AllItemsCard;
exports.AllSelectionsCard = AllSelectionsCard;