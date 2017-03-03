import fetch from '../../server/fetch';
import tmpId from './tmp-id';

export const CREATE_ITEM = 'CREATE_ITEM';
function createItem (item) {
  return {
    type: CREATE_ITEM,
    item,
  };
}

export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
function createItemSuccess (item, _id) {
  return {
    type: CREATE_ITEM_SUCCESS,
    item, _id,
  };
}

export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR';
function createItemError (item, _id, error) {
  return {
    type: CREATE_ITEM_ERROR,
    item, _id, error,
  };
}

export function newItem (title) {
  const _id = tmpId();
  const item = {title, _id};

  return dispatch => {
    dispatch(createItem(item));

    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(json => {
        if (!json._id || !json.title) {
          dispatch(createItemError(item, _id, json));
          throw new Error(json);
        } else {
          dispatch(createItemSuccess(json, _id));
          return json;
        }
      });
  };
}
