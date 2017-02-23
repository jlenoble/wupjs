'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleItemCkeckbox = exports.SelectItemCheckbox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actionGlyphCheckbox = require('../container/action-glyph-checkbox');

var _actionGlyphCheckbox2 = _interopRequireDefault(_actionGlyphCheckbox);

var _actions = require('../../actions');

var _proptypes = require('./proptypes');

var _makeIsProp = require('../../helpers/make-is-prop');

var _makeIsProp2 = _interopRequireDefault(_makeIsProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeItemCheckbox = function makeItemCheckbox(_ref) {
  var classHint = _ref.classHint,
      makeHandleChange = _ref.makeHandleChange;

  var isProp = (0, _makeIsProp2.default)(classHint);

  var ItemCheckbox = function ItemCheckbox(_ref2) {
    var item = _ref2.item,
        addClass = _ref2.addClass;
    return _react2.default.createElement(_actionGlyphCheckbox2.default, {
      handleChange: makeHandleChange(item),
      addClass: (0, _classnames2.default)('toggle-' + classHint, addClass),
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
  classHint: 'selected',
  makeHandleChange: function makeHandleChange(item) {
    return function (input, dispatch) {
      dispatch((0, _actions.unfocusCurrentItem)());

      if (input.checked) {
        dispatch((0, _actions.selectItem)(item));
      } else {
        dispatch((0, _actions.unselectItem)(item));
      }
    };
  }
});

var ScheduleItemCkeckbox = makeItemCheckbox({
  classHint: 'scheduled',
  makeHandleChange: function makeHandleChange(item) {
    return function (input, dispatch) {
      dispatch((0, _actions.unfocusCurrentItem)());
    };
  }
});

exports.SelectItemCheckbox = SelectItemCheckbox;
exports.ScheduleItemCkeckbox = ScheduleItemCkeckbox;