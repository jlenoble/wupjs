'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifyItemInputGroup = exports.AddItemInputGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _actionGlyphInputGroup = require('../container/action-glyph-input-group');

var _actionGlyphInputGroup2 = _interopRequireDefault(_actionGlyphInputGroup);

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeItemInputGroup = function makeItemInputGroup(_ref) {
  var glyphicon = _ref.glyphicon,
      autoFocus = _ref.autoFocus,
      placeholder = _ref.placeholder,
      handleFocus = _ref.handleFocus,
      makeHandleSubmit = _ref.makeHandleSubmit;

  var ItemInputGroup = function ItemInputGroup(_ref2) {
    var _ref2$item = _ref2.item,
        item = _ref2$item === undefined ? {} : _ref2$item,
        dispatch = _ref2.dispatch;

    return _react2.default.createElement(_actionGlyphInputGroup2.default, {
      glyphicon: glyphicon,
      autoFocus: autoFocus,
      placeholder: placeholder,
      handleFocus: handleFocus,
      handleSubmit: makeHandleSubmit(item),
      defaultValue: item.title
    });
  };

  ItemInputGroup.propTypes = {
    item: _proptypes.itemPropType.isRequired
  };

  var mapStateToProps = function mapStateToProps(state) {
    var item = state.currentItem;
    return { item: item };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(ItemInputGroup);
};

exports.default = makeItemInputGroup;


var ModifyItemInputGroup = makeItemInputGroup({
  glyphicon: 'save',
  autoFocus: true,
  makeHandleSubmit: function makeHandleSubmit(item) {
    return function (input, clearInput, dispatch) {
      var trimmed = input.value.trim();
      if (!trimmed) {
        return;
      }
      dispatch((0, _actions.updateItem)({
        title: trimmed,
        _id: item._id
      }, item));
      clearInput();
      dispatch((0, _actions.unfocusCurrentItem)());
    };
  }
});

var AddItemInputGroup = makeItemInputGroup({
  glyphicon: 'plus',
  placeholder: 'Enter an item',
  handleFocus: function handleFocus(dispatch) {
    return dispatch((0, _actions.unfocusCurrentItem)());
  },
  makeHandleSubmit: function makeHandleSubmit() {
    return function (input, clearInput, dispatch) {
      if (!input.value.trim()) {
        return;
      }
      dispatch((0, _actions.newItem)(input.value));
      clearInput();
    };
  }
});

exports.AddItemInputGroup = AddItemInputGroup;
exports.ModifyItemInputGroup = ModifyItemInputGroup;