'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameSelectionInputGroup = exports.ModifyItemInputGroup = exports.AddItemInputGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _wupjsGlyphInputText = require('wupjs-glyph-input-text');

var _proptypes = require('./proptypes');

var _helpers = require('../../helpers');

var _store = require('../../server/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeItemInputGroup = function makeItemInputGroup(_ref) {
  var glyphicon = _ref.glyphicon,
      autoFocus = _ref.autoFocus,
      autoClear = _ref.autoClear,
      placeholder = _ref.placeholder,
      handleFocus = _ref.handleFocus,
      handleSubmit = _ref.handleSubmit;

  var ItemInputGroup = function ItemInputGroup(_ref2) {
    var _ref2$item = _ref2.item,
        item = _ref2$item === undefined ? {} : _ref2$item;

    var inputNode = void 0;
    return _react2.default.createElement(_wupjsGlyphInputText.GlyphInputText, {
      placeholder: placeholder,
      glyph: glyphicon,
      exposeInputNode: function exposeInputNode(node) {
        inputNode = node;
      },
      autoFocus: autoFocus,
      autoClear: autoClear,
      defaultValue: item.title,
      onFocus: handleFocus && function () {
        return handleFocus(_store.dispatch);
      },
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        handleSubmit(inputNode, item);
      }
    });
  };

  ItemInputGroup.propTypes = {
    item: _proptypes.itemPropType.isRequired
  };

  var mapStateToProps = function mapStateToProps(state) {
    var item = state.currentItem;
    return { item: item };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(ItemInputGroup);
};

exports.default = makeItemInputGroup;


var ModifyItemInputGroup = makeItemInputGroup({
  glyphicon: 'save',
  autoFocus: true,
  handleSubmit: function handleSubmit(input, item) {
    var trimmed = input.value.trim();
    if (!trimmed) {
      return;
    }
    (0, _store.dispatch)((0, _actions.updateItem)({
      title: trimmed,
      _id: item._id
    }, item));
    (0, _store.dispatch)((0, _actions.unfocusCurrentItem)());
  }
});

var AddItemInputGroup = makeItemInputGroup({
  glyphicon: 'plus',
  placeholder: 'Enter an item',
  autoClear: true,
  handleFocus: function handleFocus(dispatch) {
    return dispatch((0, _actions.unfocusCurrentItem)());
  },
  handleSubmit: function handleSubmit(input, item) {
    if (!input.value.trim()) {
      return;
    }
    (0, _store.dispatch)((0, _actions.newItem)(input.value));
  }
});

var NameSelectionInputGroup = makeItemInputGroup({
  glyphicon: 'save',
  placeholder: 'Enter a name',
  autoFocus: true,
  handleFocus: function handleFocus(dispatch) {
    return dispatch((0, _actions.unfocusCurrentItem)());
  },
  handleSubmit: function handleSubmit(input, item) {
    if (!input.value.trim()) {
      return;
    }
    (0, _store.dispatch)((0, _actions.newItem)(input.value)).then(function (item) {
      return (0, _store.dispatch)((0, _actions.displaySelectionName)(item));
    }, function () {
      return (0, _store.dispatch)((0, _actions.stopNamingSelection)());
    }).then(function (_ref3) {
      var item = _ref3.item;
      return (0, _store.dispatch)((0, _actions.newSelection)(item));
    });
  }
});

(0, _helpers.setFuncName)(AddItemInputGroup, 'AddItemInputGroup');
(0, _helpers.setFuncName)(ModifyItemInputGroup, 'ModifyItemInputGroup');
(0, _helpers.setFuncName)(NameSelectionInputGroup, 'NameSelectionInputGroup');

exports.AddItemInputGroup = AddItemInputGroup;
exports.ModifyItemInputGroup = ModifyItemInputGroup;
exports.NameSelectionInputGroup = NameSelectionInputGroup;