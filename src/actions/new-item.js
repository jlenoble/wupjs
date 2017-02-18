import fetch from '../server/fetch';

let _tmpId = 0;
const tmpId = () => 'itemTmpId' + (_tmpId++);

export const CREATE_ITEM = 'CREATE_ITEM';
function createItem (item, _id) {
  return {
    type: CREATE_ITEM,
    item, _id,
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
  const item = {title};

  return dispatch => {
    dispatch(createItem(item, _id));

    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(json => {
        if (!json._id || !json._title) {
          dispatch(createItemError(item, _id, json));
        } else {
          dispatch(createItemSuccess(json, _id));
        }
      });
  };
}
