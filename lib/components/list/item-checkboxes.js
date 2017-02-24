'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleItemCkeckbox = exports.SelectItemCheckbox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionGlyphCheckbox = require('../container/action-glyph-checkbox');

var _actionGlyphCheckbox2 = _interopRequireDefault(_actionGlyphCheckbox);

var _actions = require('../../actions');

var _proptypes = require('./proptypes');

var _helpers = require('../../helpers');

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
      makeHandleChange = _ref.makeHandleChange;

  var classHint = getClassHintFromGlyph(glyphicon);
  var isProp = (0, _helpers.makeIsProp)(classHint);

  var ItemCheckbox = function ItemCheckbox(_ref2) {
    var item = _ref2.item,
        addClass = _ref2.addClass;
    return _react2.default.createElement(_actionGlyphCheckbox2.default, {
      handleChange: makeHandleChange(item),
      addClass: addClass,
      glyphicon: glyphicon,
      checked: item[isProp]
    });
  };

  var requiredProps = {};
  requiredProps[isProp] = 'bool';
  ItemCheckbox.propTypes = {
    item: (0, _proptypes.itemWithRequiredProps)(requiredProps).isRequired
  };

  return ItemCheckbox;
};

exports.default = makeItemCheckbox;


var SelectItemCheckbox = makeItemCheckbox({
  glyphicon: 'check',
  makeHandleChange: (0, _helpers.makeHandleChange)(_actions.selectItem, _actions.unselectItem)
});

var ScheduleItemCkeckbox = makeItemCheckbox({
  glyphicon: 'clock-o',
  makeHandleChange: function makeHandleChange(item) {
    return function (input, dispatch) {
      dispatch(unfocusCurrentItem());
    };
  }
});

exports.SelectItemCheckbox = SelectItemCheckbox;
exports.ScheduleItemCkeckbox = ScheduleItemCkeckbox;