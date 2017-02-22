export const SELECT_ITEM = 'SELECT_ITEM';
export function selectItem ({_id}) {
  return dispatch => {
    dispatch({
      type: SELECT_ITEM,
      _id,
    });
  };
}

export const UNSELECT_ITEM = 'UNSELECT_ITEM';
export function unselectItem ({_id}) {
  return dispatch => {
    dispatch({
      type: UNSELECT_ITEM,
      _id,
    });
  };
}
