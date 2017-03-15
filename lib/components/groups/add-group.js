'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../../actions');

var _wupjsGlyphInputText = require('wupjs-glyph-input-text');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddGroup = function AddGroup() {
  return _react2.default.createElement(_wupjsGlyphInputText.GlyphInputText, {
    placeholder: 'Enter an item',
    glyph: 'plus',
    autoFocus: true,
    autoClear: true,
    onFocus: function onFocus() {
      return (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
    },
    onSubmit: function onSubmit(e) {
      var value = e.target.value.trim();
      if (!value) {
        return;
      }
      (0, _store.dispatch)((0, _actions.newItem)(value));
    }
  });
};

exports.default = AddGroup;
module.exports = exports['default'];