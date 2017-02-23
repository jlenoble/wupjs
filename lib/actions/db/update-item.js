'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_ITEM_ERROR = exports.UPDATE_ITEM_SUCCESS = exports.UPDATE_ITEM = undefined;
exports.updateItem = updateItem;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_ITEM = exports.UPDATE_ITEM = 'UPDATE_ITEM';
function requestUpdateItem(_ref) {
  var title = _ref.title,
      _id = _ref._id;

  return {
    type: UPDATE_ITEM,
    title: title, _id: _id
  };
}

var UPDATE_ITEM_SUCCESS = exports.UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
function updateItemSuccess() {
  return {
    type: UPDATE_ITEM_SUCCESS
  };
}

var UPDATE_ITEM_ERROR = exports.UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR';
function updateItemError(_ref2, error) {
  var title = _ref2.title,
      _id = _ref2._id;

  return {
    type: UPDATE_ITEM_ERROR,
    title: title, _id: _id, error: error
  };
}

function updateItem(item, previousItem) {
  var title = item.title,
      _id = item._id;


  return function (dispatch) {
    dispatch(requestUpdateItem(item));

    return (0, _fetch2.default)('/api/items/' + _id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!json._id || json.title !== title) {
        dispatch(updateItemError(previousItem, json));
      } else {
        dispatch(updateItemSuccess());
      }
    });
  };
}