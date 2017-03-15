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

var AllSelectionsCard = function AllSelectionsCard(_ref) {
  var items = _ref.items,
      isFetching = _ref.isFetching;

  return _react2.default.createElement(_card2.default, {
    item: {
      _id: 'all-selections',
      title: 'All selections'
    },
    items: items,
    isFetching: isFetching,
    headerUi: {
      title: true
    },
    blockUi: {
      delete: true
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: state.items.isFetching,
    items: (0, _helpers.getItemsFromSelectionMap)((0, _helpers.getMapOfAllSelections)())
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AllSelectionsCard);
module.exports = exports['default'];