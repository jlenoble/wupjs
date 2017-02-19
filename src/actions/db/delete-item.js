import fetch from '../../server/fetch';

export const DELETE_ITEM = 'DELETE_ITEM';
function requestDeleteItem (_id) {
  return {
    type: DELETE_ITEM,
    _id,
  };
}

export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
function deleteItemSuccess () {
  return {
    type: DELETE_ITEM_SUCCESS,
  };
}

export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';
function deleteItemError (item, error) {
  return {
    type: DELETE_ITEM_ERROR,
    item, error,
  };
}

export function deleteItem (item) {
  const {_id} = item;

  return dispatch => {
    dispatch(requestDeleteItem(_id));

    return fetch('/api/items/' + _id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        if (!json._id) {
          dispatch(deleteItemError(item, json));
        } else {
          dispatch(deleteItemSuccess());
        }
      });
  };
}
