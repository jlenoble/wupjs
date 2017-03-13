'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleItemCkeckbox = exports.SelectItemCheckbox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wupjsGlyphCheckbox = require('wupjs-glyph-checkbox');

var _actions = require('../../actions');

var _proptypes = require('./proptypes');

var _helpers = require('../../helpers');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getClassHintFromGlyph = function getClassHintFromGlyph(glyphicon) {
  switch (glyphicon) {
    case 'trash-o':
      return 'deleted';

    case 'edit':
      return 'edited';

    case 'close':
      return 'removed';

    case 'clock-o':
      return 'scheduled';

    case 'check':
      return 'selected';

    case 'bomb':
      return 'shredded';

    default:
      return 'undefined';
  }
};

var makeItemCheckbox = function makeItemCheckbox(_ref) {
  var glyphicon = _ref.glyphicon,
      handleCheck = _ref.handleCheck,
      handleUncheck = _ref.handleUncheck;

  var classHint = getClassHintFromGlyph(glyphicon);
  var isProp = (0, _helpers.makeIsProp)(classHint);

  var ItemCheckbox = function ItemCheckbox(_ref2) {
    var item = _ref2.item;

    return _react2.default.createElement(_wupjsGlyphCheckbox.GlyphCheckbox, {
      onCheck: function onCheck() {
        handleCheck(item);
      },
      onUncheck: function onUncheck() {
        handleUncheck(item);
      },
      glyph: glyphicon,
      checked: item[isProp],
      itemId: item._id
    });
  };

  var requiredProps = {};
  requiredProps[isProp] = 'bool';
  ItemCheckbox.propTypes = {
    item: (0, _proptypes.extendItemPropType)(requiredProps).isRequired
  };

  return ItemCheckbox;
};

exports.default = makeItemCheckbox;


var SelectItemCheckbox = makeItemCheckbox({
  glyphicon: 'check',
  handleCheck: function handleCheck(obj) {
    (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
    (0, _store.dispatch)((0, _actions.selectItem)(obj));
  },
  handleUncheck: function handleUncheck(obj) {
    (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
    (0, _store.dispatch)((0, _actions.unselectItem)(obj));
  }
});

var ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  handleCheck: function handleCheck() {
    (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
  },
  handleUncheck: function handleUncheck() {
    (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
  }
});

(0, _helpers.setFuncName)(SelectItemCheckbox, 'SelectItemCheckbox');
(0, _helpers.setFuncName)(ScheduleItemCkeckbox, 'ScheduleItemCkeckbox');

exports.SelectItemCheckbox = SelectItemCheckbox;
exports.ScheduleItemCkeckbox = ScheduleItemCkeckbox;