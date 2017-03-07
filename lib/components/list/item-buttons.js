'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveCurrentSelectionButton = exports.DeleteItemButton = exports.UnselectItemButton = exports.EditItemButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wupjsGlyphButton = require('wupjs-glyph-button');

var _actions = require('../../actions');

var _proptypes = require('./proptypes');

var _helpers = require('../../helpers');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeItemButton = function makeItemButton(applyToItem, glyphicon, propTypes) {
  var ItemButton = function ItemButton(_ref) {
    var item = _ref.item;
    return _react2.default.createElement(_wupjsGlyphButton.GlyphButton, {
      onClick: function onClick() {
        (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
        (0, _store.dispatch)(applyToItem(item));
      },
      glyph: glyphicon
    });
  };

  ItemButton.propTypes = propTypes || {
    item: _proptypes.itemPropType.isRequired,
    addClass: _react.PropTypes.string
  };

  return ItemButton;
};

exports.default = makeItemButton;


var EditItemButton = makeItemButton(_actions.editItem, 'pencil');
var UnselectItemButton = makeItemButton(_actions.unselectItem, 'close');
var DeleteItemButton = makeItemButton(_actions.deleteItem, 'trash-o');
var SaveCurrentSelectionButton = makeItemButton(_actions.startNamingSelection, 'save', { item: _proptypes.itemPropType });

(0, _helpers.setFuncName)(EditItemButton, 'EditItemButton');
(0, _helpers.setFuncName)(UnselectItemButton, 'UnselectItemButton');
(0, _helpers.setFuncName)(DeleteItemButton, 'DeleteItemButton');
(0, _helpers.setFuncName)(SaveCurrentSelectionButton, 'SaveCurrentSelectionButton');

exports.EditItemButton = EditItemButton;
exports.UnselectItemButton = UnselectItemButton;
exports.DeleteItemButton = DeleteItemButton;
exports.SaveCurrentSelectionButton = SaveCurrentSelectionButton;