export const SELECT_ITEM = 'SELECT_ITEM';
export function selectItem (item) {
  return dispatch => {
    dispatch({
      type: SELECT_ITEM,
      item,
    });
  };
}

export const UNSELECT_ITEM = 'UNSELECT_ITEM';
export function unselectItem (item) {
  return dispatch => {
    dispatch({
      type: UNSELECT_ITEM,
      item,
    });
  };
}
