'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('../list/proptypes');

var _wupjsGlyphButton = require('wupjs-glyph-button');

var _actions = require('../../actions');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditGroup = function EditGroup(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(_wupjsGlyphButton.GlyphButtonGroup, {
    glyphs: ['pencil'],
    onClicks: {
      'pencil': function pencil() {
        (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
        (0, _store.dispatch)((0, _actions.editItem)(item));
      }
    }
  });
};

EditGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired
};

exports.default = EditGroup;
module.exports = exports['default'];