'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wupjsGlyphButton = require('wupjs-glyph-button');

var _actions = require('../../actions');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateGroup = function CreateGroup() {
  return _react2.default.createElement(_wupjsGlyphButton.GlyphButtonGroup, {
    glyphs: ['save'],
    onClicks: {
      'save': function save() {
        (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
        (0, _store.dispatch)((0, _actions.startNamingSelection)());
      }
    }
  });
};

exports.default = CreateGroup;
module.exports = exports['default'];