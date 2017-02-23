'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editItem = editItem;
exports.unfocusCurrentItem = unfocusCurrentItem;
var EDIT_ITEM = exports.EDIT_ITEM = 'EDIT_ITEM';
function editItem(_ref) {
  var _id = _ref._id,
      title = _ref.title;

  return function (dispatch) {
    dispatch({
      type: EDIT_ITEM,
      _id: _id, title: title
    });
  };
}

var UNFOCUS_CURRENT_ITEM = exports.UNFOCUS_CURRENT_ITEM = 'UNFOCUS_CURRENT_ITEM';
function unfocusCurrentItem() {
  return function (dispatch) {
    dispatch({
      type: UNFOCUS_CURRENT_ITEM
    });
  };
}