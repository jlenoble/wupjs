export const EDIT_ITEM = 'EDIT_ITEM';
export function editItem ({_id, title}) {
  return dispatch => {
    dispatch({
      type: EDIT_ITEM,
      _id, title,
    });
  };
}

export const UNFOCUS_CURRENT_ITEM = 'UNFOCUS_CURRENT_ITEM';
export function unfocusCurrentItem () {
  return dispatch => {
    dispatch({
      type: UNFOCUS_CURRENT_ITEM,
    });
  };
}
