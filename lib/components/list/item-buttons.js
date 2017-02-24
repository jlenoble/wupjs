'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteItemButton = exports.UnselectItemButton = exports.EditItemButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionGlyphButton = require('../container/action-glyph-button');

var _actionGlyphButton2 = _interopRequireDefault(_actionGlyphButton);

var _actions = require('../../actions');

var _proptypes = require('./proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeItemButton = function makeItemButton(applyToItem, glyphicon) {
  var ItemButton = function ItemButton(_ref) {
    var item = _ref.item,
        addClass = _ref.addClass;
    return _react2.default.createElement(_actionGlyphButton2.default, {
      handleClick: function handleClick(dispatch) {
        dispatch((0, _actions.unfocusCurrentItem)());
        dispatch(applyToItem(item));
      },
      glyphicon: glyphicon,
      addClass: addClass
    });
  };

  ItemButton.propTypes = {
    item: _proptypes.itemPropType.isRequired,
    addClass: _react.PropTypes.string
  };

  return ItemButton;
};

exports.default = makeItemButton;


var EditItemButton = makeItemButton(_actions.editItem, 'pencil');
var UnselectItemButton = makeItemButton(_actions.unselectItem, 'close');
var DeleteItemButton = makeItemButton(_actions.deleteItem, 'trash-o');

exports.EditItemButton = EditItemButton;
exports.UnselectItemButton = UnselectItemButton;
exports.DeleteItemButton = DeleteItemButton;