'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectItem = selectItem;
exports.unselectItem = unselectItem;
var SELECT_ITEM = exports.SELECT_ITEM = 'SELECT_ITEM';
function selectItem(item) {
  return function (dispatch) {
    dispatch({
      type: SELECT_ITEM,
      item: item
    });
  };
}

var UNSELECT_ITEM = exports.UNSELECT_ITEM = 'UNSELECT_ITEM';
function unselectItem(item) {
  return function (dispatch) {
    dispatch({
      type: UNSELECT_ITEM,
      item: item
    });
  };
}