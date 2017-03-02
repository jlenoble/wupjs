export const START_NAMING_SELECTION = 'START_NAMING_SELECTION';
export function startNamingSelection () {
  return dispatch => {
    dispatch({
      type: START_NAMING_SELECTION,
    });
  };
}

export const STOP_NAMING_SELECTION = 'STOP_NAMING_SELECTION';
export function stopNamingSelection () {
  return dispatch => {
    dispatch({
      type: STOP_NAMING_SELECTION,
    });
  };
}

export const DISPLAY_SELECTION_NAME = 'DISPLAY_SELECTION_NAME';
export function displaySelectionName (item) {
  return dispatch => {
    dispatch({
      type: DISPLAY_SELECTION_NAME,
      item,
    });
  };
}
