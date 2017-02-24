'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleSwitchButton = exports.DeleteSwitchButton = exports.SelectSwitchButton = exports.EditSwitchButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionGlyphCheckbox = require('../container/action-glyph-checkbox');

var _actionGlyphCheckbox2 = _interopRequireDefault(_actionGlyphCheckbox);

var _actions = require('../../actions');

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSwitchButton = function makeSwitchButton(applyToItem, glyphicon) {
  var SwitchButton = function SwitchButton(_ref) {
    var addClass = _ref.addClass;
    return _react2.default.createElement(
      'button',
      { className: 'btn btn-secondary' },
      _react2.default.createElement(_actionGlyphCheckbox2.default, {
        handleChange: function handleChange(dispatch) {
          dispatch((0, _actions.unfocusCurrentItem)());
          dispatch(applyToItem());
        },
        glyphicon: glyphicon,
        addClass: addClass
      })
    );
  };

  SwitchButton.propTypes = {
    addClass: _react.PropTypes.string
  };

  return SwitchButton;
};

exports.default = makeSwitchButton;


var EditSwitchButton = makeSwitchButton(function () {}, 'pencil');
var SelectSwitchButton = makeSwitchButton(function () {}, 'check');
var DeleteSwitchButton = makeSwitchButton(function () {}, 'trash-o');
var ScheduleSwitchButton = makeSwitchButton(function () {}, 'clock-o');

(0, _helpers.setFuncName)(EditSwitchButton, 'EditSwitchButton');
(0, _helpers.setFuncName)(SelectSwitchButton, 'SelectSwitchButton');
(0, _helpers.setFuncName)(DeleteSwitchButton, 'DeleteSwitchButton');
(0, _helpers.setFuncName)(ScheduleSwitchButton, 'ScheduleSwitchButton');

exports.EditSwitchButton = EditSwitchButton;
exports.SelectSwitchButton = SelectSwitchButton;
exports.DeleteSwitchButton = DeleteSwitchButton;
exports.ScheduleSwitchButton = ScheduleSwitchButton;