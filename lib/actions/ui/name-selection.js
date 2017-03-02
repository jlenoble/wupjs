'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startNamingSelection = startNamingSelection;
exports.stopNamingSelection = stopNamingSelection;
exports.displaySelectionName = displaySelectionName;
var START_NAMING_SELECTION = exports.START_NAMING_SELECTION = 'START_NAMING_SELECTION';
function startNamingSelection() {
  return function (dispatch) {
    dispatch({
      type: START_NAMING_SELECTION
    });
  };
}

var STOP_NAMING_SELECTION = exports.STOP_NAMING_SELECTION = 'STOP_NAMING_SELECTION';
function stopNamingSelection() {
  return function (dispatch) {
    dispatch({
      type: STOP_NAMING_SELECTION
    });
  };
}

var DISPLAY_SELECTION_NAME = exports.DISPLAY_SELECTION_NAME = 'DISPLAY_SELECTION_NAME';
function displaySelectionName(item) {
  return function (dispatch) {
    dispatch({
      type: DISPLAY_SELECTION_NAME,
      item: item
    });
  };
}