'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../list/list');

var _list2 = _interopRequireDefault(_list);

var _proptypes = require('../list/proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardBlock = function CardBlock(_ref) {
  var items = _ref.items,
      isFetching = _ref.isFetching,
      ui = _ref.ui;
  return _react2.default.createElement(
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
      ui: ui
    })
  );
};

CardBlock.propTypes = {
  items: _proptypes.itemsPropType.isRequired,
  isFetching: _react.PropTypes.bool,
  ui: _react.PropTypes.object
};

CardBlock.defaultProps = {
  isFetching: false,
  ui: {}
};

exports.default = CardBlock;
module.exports = exports['default'];