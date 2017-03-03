import fetch from '../../server/fetch';
import tmpId from './tmp-id';

export const CREATE_SELECTION = 'CREATE_SELECTION';
function createSelection (selection) {
  return {
    type: CREATE_SELECTION,
    selection,
  };
}

export const CREATE_SELECTION_SUCCESS = 'CREATE_SELECTION_SUCCESS';
function createSelectionSuccess (selection, _id) {
  return {
    type: CREATE_SELECTION_SUCCESS,
    selection, _id,
  };
}

export const CREATE_SELECTION_ERROR = 'CREATE_SELECTION_ERROR';
function createSelectionError (selection, _id, error) {
  return {
    type: CREATE_SELECTION_ERROR,
    selection, _id, error,
  };
}

export function newSelection (item) {
  const _id = tmpId();
  const itemId = item._id;

  return (dispatch, getState) => {
    const items = Object.keys(getState().currentSelection.items);
    const selection = {_id, itemId, items};

    dispatch(createSelection(selection));

    return fetch('/api/selections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selection),
    })
      .then(response => response.json())
      .then(json => {
        if (!json._id || !json.itemId || !Array.isArray(json.items)) {
          dispatch(createSelectionError(selection, _id, json));
          throw new Error(json);
        } else {
          dispatch(createSelectionSuccess(json, _id));
          return json;
        }
      });
  };
}
