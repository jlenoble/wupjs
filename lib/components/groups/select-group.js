'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('../list/proptypes');

var _wupjsGlyphCheckbox = require('wupjs-glyph-checkbox');

var _actions = require('../../actions');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectGroup = function SelectGroup(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(_wupjsGlyphCheckbox.GlyphCheckboxGroup, {
    glyphs: ['check'],
    onChecks: {
      check: function check() {
        (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
        (0, _store.dispatch)((0, _actions.selectItem)(item));
      }
    },
    onUnchecks: {
      check: function check() {
        (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
        (0, _store.dispatch)((0, _actions.unselectItem)(item));
      }
    },
    checked: {
      check: item.isSelected
    }
  });
};

SelectGroup.propTypes = {
  item: _proptypes.itemPropType.isRequired
};

exports.default = SelectGroup;
module.exports = exports['default'];