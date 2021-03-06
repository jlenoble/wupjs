'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CREATE_ITEM_ERROR = exports.CREATE_ITEM_SUCCESS = exports.CREATE_ITEM = undefined;
exports.newItem = newItem;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _tmpId = require('./tmp-id');

var _tmpId2 = _interopRequireDefault(_tmpId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_ITEM = exports.CREATE_ITEM = 'CREATE_ITEM';
function createItem(item) {
  return {
    type: CREATE_ITEM,
    item: item
  };
}

var CREATE_ITEM_SUCCESS = exports.CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
function createItemSuccess(item, _id) {
  return {
    type: CREATE_ITEM_SUCCESS,
    item: item, _id: _id
  };
}

var CREATE_ITEM_ERROR = exports.CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR';
function createItemError(item, _id, error) {
  return {
    type: CREATE_ITEM_ERROR,
    item: item, _id: _id, error: error
  };
}

function newItem(title) {
  var _id = (0, _tmpId2.default)();
  var item = { title: title, _id: _id };

  return function (dispatch) {
    dispatch(createItem(item));

    return (0, _fetch2.default)('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!json._id || !json.title) {
        dispatch(createItemError(item, _id, json));
        throw new Error(json);
      } else {
        dispatch(createItemSuccess(json, _id));
        return json;
      }
    });
  };
}