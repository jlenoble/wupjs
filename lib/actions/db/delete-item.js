'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_ITEM_ERROR = exports.DELETE_ITEM_SUCCESS = exports.DELETE_ITEM = undefined;
exports.deleteItem = deleteItem;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DELETE_ITEM = exports.DELETE_ITEM = 'DELETE_ITEM';
function requestDeleteItem(_id) {
  return {
    type: DELETE_ITEM,
    _id: _id
  };
}

var DELETE_ITEM_SUCCESS = exports.DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
function deleteItemSuccess() {
  return {
    type: DELETE_ITEM_SUCCESS
  };
}

var DELETE_ITEM_ERROR = exports.DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';
function deleteItemError(item, error) {
  return {
    type: DELETE_ITEM_ERROR,
    item: item, error: error
  };
}

function deleteItem(item) {
  var _id = item._id;


  return function (dispatch) {
    dispatch(requestDeleteItem(_id));

    return (0, _fetch2.default)('/api/items/' + _id, {
      method: 'DELETE'
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!json._id) {
        dispatch(deleteItemError(item, json));
      } else {
        dispatch(deleteItemSuccess());
      }
    });
  };
}