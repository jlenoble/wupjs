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

var AllItemsCard = function AllItemsCard(_ref) {
  var items = _ref.items,
      isFetching = _ref.isFetching;

  return _react2.default.createElement(_card2.default, {
    item: {
      _id: 'all-items',
      title: 'All items'
    },
    items: items,
    isFetching: isFetching,
    headerUi: {
      add: true,
      title: true
    },
    blockUi: {
      select: true,
      delete: true
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  var items = (0, _helpers.getItemsFromItemMap)((0, _helpers.getMapOfAllItems)());
  var selectionMap = (0, _helpers.getCurrentSelectionMap)();
  var currentItem = state.currentItem;

  return {
    isFetching: state.items.isFetching,
    items: items.map(function (item) {
      return Object.assign({
        isBeingEdited: (0, _helpers.itemIsEditedWithinCard)(item, AllItemsCard, currentItem),
        isSelected: selectionMap[item._id] ? true : false,
        cardName: AllItemsCard.name
      }, item);
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AllItemsCard);
module.exports = exports['default'];