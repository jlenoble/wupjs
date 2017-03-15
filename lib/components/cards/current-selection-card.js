'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _reactRedux = require('react-redux');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentSelectionCard = function CurrentSelectionCard(_ref) {
  var item = _ref.item,
      items = _ref.items,
      isFetching = _ref.isFetching,
      headerUi = _ref.headerUi;

  return _react2.default.createElement(_card2.default, {
    item: item,
    items: items,
    isFetching: isFetching,
    headerUi: headerUi,
    blockUi: {
      remove: true
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  var items = (0, _helpers.getItemsFromItemMap)((0, _helpers.getCurrentSelectionMap)());
  var currentSelection = state.currentSelection;
  var currentItem = state.currentItem;

  var item = currentSelection.item;
  var headerUi = void 0;

  if (item) {
    headerUi = {
      title: true,
      save: true,
      itemUi: {
        edit: true
      }
    };
  } else if (currentSelection.isBeingNamed) {
    headerUi = {
      name: true
    };
  } else {
    headerUi = {
      create: true
    };
  }

  return {
    isFetching: state.items.isFetching,
    items: items.map(function (item) {
      return Object.assign({
        isBeingEdited: (0, _helpers.itemIsEditedWithinCard)(item, CurrentSelectionCard, currentItem),
        isSelected: true,
        cardName: CurrentSelectionCard.name
      }, item);
    }),
    item: item, headerUi: headerUi
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CurrentSelectionCard);
module.exports = exports['default'];