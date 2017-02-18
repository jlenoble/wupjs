import fetch from '../server/fetch';

export const CREATE_ITEM = 'CREATE_ITEM';
function createItem (item) {
  return {
    type: CREATE_ITEM,
    item,
  };
}

export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
function createItemSuccess (item) {
  console.log('create', item)
  return {
    type: CREATE_ITEM_SUCCESS,
    item,
  };
}

export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR';
function createItemError (error) {
  return {
    type: CREATE_ITEM_ERROR,
    error,
  };
}

export function newItem (title) {
  const item = {title};

  return dispatch => {
    dispatch(createItem(item));

    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(
        response => response.json(),
        err => dispatch(createItemError(err))
      ).then(
        json => dispatch(createItemSuccess(json))
      );
  };
}
