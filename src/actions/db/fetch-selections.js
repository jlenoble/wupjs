import fetch from '../../server/fetch';

export const REQUEST_SELECTIONS = 'REQUEST_SELECTIONS';
function requestSelections () {
  return {
    type: REQUEST_SELECTIONS,
  };
}

export const RECEIVE_SELECTIONS_SUCCESS = 'RECEIVE_SELECTIONS_SUCCESS';
function receiveSelectionsSuccess (json) {
  return {
    type: RECEIVE_SELECTIONS_SUCCESS,
    items: json,
  };
}

export const RECEIVE_SELECTIONS_ERROR = 'RECEIVE_SELECTIONS_ERROR';
function receiveSelectionsError (error) {
  return {
    type: RECEIVE_SELECTIONS_ERROR,
    error,
  };
}

function fetchSelections () {
  return dispatch => {
    dispatch(requestSelections());

    return fetch('/api/selections')
      .then(response => response.json())
      .then(json => {
        if (!Array.isArray(json)) {
          dispatch(receiveSelectionsError(json));
          throw new Error(json);
        } else {
          dispatch(receiveSelectionsSuccess(json));
          return json;
        }
      });
  };
}

function shouldFetchSelections (state) {
  const {selections} = state;
  return !selections || (Object.keys(selections.items).length === 0 &&
    !selections.isFetching);
}

export function fetchSelectionsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchSelections(getState())) {
      return dispatch(fetchSelections());
    }
  };
}
