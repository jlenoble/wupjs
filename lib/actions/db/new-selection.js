'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CREATE_SELECTION_ERROR = exports.CREATE_SELECTION_SUCCESS = exports.CREATE_SELECTION = undefined;
exports.newSelection = newSelection;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _tmpId = require('./tmp-id');

var _tmpId2 = _interopRequireDefault(_tmpId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_SELECTION = exports.CREATE_SELECTION = 'CREATE_SELECTION';
function createSelection(selection) {
  return {
    type: CREATE_SELECTION,
    selection: selection
  };
}

var CREATE_SELECTION_SUCCESS = exports.CREATE_SELECTION_SUCCESS = 'CREATE_SELECTION_SUCCESS';
function createSelectionSuccess(selection, _id) {
  return {
    type: CREATE_SELECTION_SUCCESS,
    selection: selection, _id: _id
  };
}

var CREATE_SELECTION_ERROR = exports.CREATE_SELECTION_ERROR = 'CREATE_SELECTION_ERROR';
function createSelectionError(selection, _id, error) {
  return {
    type: CREATE_SELECTION_ERROR,
    selection: selection, _id: _id, error: error
  };
}

function newSelection(item) {
  var _id = (0, _tmpId2.default)();
  var itemId = item._id;

  return function (dispatch, getState) {
    var items = Object.keys(getState().currentSelection.items);
    var selection = { _id: _id, itemId: itemId, items: items };

    dispatch(createSelection(selection));

    return (0, _fetch2.default)('/api/selections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selection)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!json._id || !json.itemId || !Array.isArray(json.items)) {
        dispatch(createSelectionError(selection, _id, json));
        throw new Error(json);
      } else {
        dispatch(createSelectionSuccess(json, _id));
        return json;
      }
    });
  };
}