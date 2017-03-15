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

var ModifyGroup = function ModifyGroup(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(_wupjsGlyphInputText.GlyphInputText, {
    glyph: 'save',
    autoFocus: true,
    defaultValue: item.title,
    onBlur: function onBlur() {
      return (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
    },
    onSubmit: function onSubmit(e) {
      var title = e.target.value.trim();
      if (!title) {
        return;
      }
      (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
      (0, _store.dispatch)((0, _actions.updateItem)({
        title: title,
        _id: item._id
      }, item));
    }
  });
};

exports.default = ModifyGroup;
module.exports = exports['default'];