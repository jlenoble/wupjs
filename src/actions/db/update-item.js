import fetch from '../../server/fetch';

export const UPDATE_ITEM = 'UPDATE_ITEM';
function requestUpdateItem ({title, _id}) {
  return {
    type: UPDATE_ITEM,
    item: {title, _id}, _id,
  };
}

export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
function updateItemSuccess () {
  return {
    type: UPDATE_ITEM_SUCCESS,
  };
}

export const UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR';
function updateItemError ({title, _id}, error) {
  return {
    type: UPDATE_ITEM_ERROR,
    item: {title, _id}, _id, error,
  };
}

export function updateItem (item, previousItem) {
  const {title, _id} = item;

  return dispatch => {
    dispatch(requestUpdateItem(item));

    return fetch('/api/items/' + _id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(json => {
        if (!json._id || json.title !== title) {
          dispatch(updateItemError(previousItem, json));
        } else {
          dispatch(updateItemSuccess());
        }
      });
  };
}
