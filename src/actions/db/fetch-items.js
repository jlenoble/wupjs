import fetch from '../../server/fetch';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
function requestItems () {
  return {
    type: REQUEST_ITEMS,
  };
}

export const RECEIVE_ITEMS_SUCCESS = 'RECEIVE_ITEMS_SUCCESS';
function receiveItemsSuccess (json) {
  return {
    type: RECEIVE_ITEMS_SUCCESS,
    items: json,
  };
}

export const RECEIVE_ITEMS_ERROR = 'RECEIVE_ITEMS_ERROR';
function receiveItemsError (error) {
  return {
    type: RECEIVE_ITEMS_ERROR,
    error,
  };
}

function fetchItems () {
  return dispatch => {
    dispatch(requestItems());

    return fetch('/api/items')
      .then(response => response.json())
      .then(json => {
        if (!Array.isArray(json)) {
          dispatch(receiveItemsError(json));
        } else {
          dispatch(receiveItemsSuccess(json));
        }
      });
  };
}

function shouldFetchItems (state) {
  const {items} = state;
  return !items || (Object.keys(items.items).length === 0 &&
    !items.isFetching);
}

export function fetchItemsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems());
    }
  };
}
