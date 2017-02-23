'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_ITEMS_ERROR = exports.RECEIVE_ITEMS_SUCCESS = exports.REQUEST_ITEMS = undefined;
exports.fetchItemsIfNeeded = fetchItemsIfNeeded;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_ITEMS = exports.REQUEST_ITEMS = 'REQUEST_ITEMS';
function requestItems() {
  return {
    type: REQUEST_ITEMS
  };
}

var RECEIVE_ITEMS_SUCCESS = exports.RECEIVE_ITEMS_SUCCESS = 'RECEIVE_ITEMS_SUCCESS';
function receiveItemsSuccess(json) {
  return {
    type: RECEIVE_ITEMS_SUCCESS,
    items: json
  };
}

var RECEIVE_ITEMS_ERROR = exports.RECEIVE_ITEMS_ERROR = 'RECEIVE_ITEMS_ERROR';
function receiveItemsError(error) {
  return {
    type: RECEIVE_ITEMS_ERROR,
    error: error
  };
}

function fetchItems() {
  return function (dispatch) {
    dispatch(requestItems());

    return (0, _fetch2.default)('/api/items').then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!Array.isArray(json)) {
        dispatch(receiveItemsError(json));
      } else {
        dispatch(receiveItemsSuccess(json));
      }
    });
  };
}

function shouldFetchItems(state) {
  var items = state.items;

  return !items || items.items.length === 0 && !items.isFetching;
}

function fetchItemsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems());
    }
  };
}