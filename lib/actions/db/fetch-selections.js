'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_SELECTIONS_ERROR = exports.RECEIVE_SELECTIONS_SUCCESS = exports.REQUEST_SELECTIONS = undefined;
exports.fetchSelectionsIfNeeded = fetchSelectionsIfNeeded;

var _fetch = require('../../server/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_SELECTIONS = exports.REQUEST_SELECTIONS = 'REQUEST_SELECTIONS';
function requestSelections() {
  return {
    type: REQUEST_SELECTIONS
  };
}

var RECEIVE_SELECTIONS_SUCCESS = exports.RECEIVE_SELECTIONS_SUCCESS = 'RECEIVE_SELECTIONS_SUCCESS';
function receiveSelectionsSuccess(json) {
  return {
    type: RECEIVE_SELECTIONS_SUCCESS,
    items: json
  };
}

var RECEIVE_SELECTIONS_ERROR = exports.RECEIVE_SELECTIONS_ERROR = 'RECEIVE_SELECTIONS_ERROR';
function receiveSelectionsError(error) {
  return {
    type: RECEIVE_SELECTIONS_ERROR,
    error: error
  };
}

function fetchSelections() {
  return function (dispatch) {
    dispatch(requestSelections());

    return (0, _fetch2.default)('/api/selections').then(function (response) {
      return response.json();
    }).then(function (json) {
      if (!Array.isArray(json)) {
        dispatch(receiveSelectionsError(json));
        throw new Error(json);
      } else {
        dispatch(receiveSelectionsSuccess(json));
        return json;
      }
    });
  };
}

function shouldFetchSelections(state) {
  var selections = state.selections;

  return !selections || Object.keys(selections.items).length === 0 && !selections.isFetching;
}

function fetchSelectionsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchSelections(getState())) {
      return dispatch(fetchSelections());
    }
  };
}