import fetch from '../../server/fetch';
import collections from '../collections';

const messages = {};
const actions = {};

collections.forEach(key => {
  const skey = key.slice(0, key.length - 1);
  const ITEMS = key.toUpperCase();
  const Name = skey[0].toUpperCase() + skey.slice(1);
  const Names = key[0].toUpperCase() + key.slice(1);
  const itemAction = `fetch${Name}IfNeeded`;
  const itemsAction = `fetch${Names}IfNeeded`;
  const uri = `/api/${key}`;

  const REQUEST_ITEMS = `REQUEST_${ITEMS}`;
  const RECEIVE_ITEMS_SUCCESS = `RECEIVE_${ITEMS}_SUCCESS`;
  const RECEIVE_ITEMS_ERROR = `RECEIVE_${ITEMS}_ERROR`;

  messages[key] = {};

  messages[key].REQUEST_ITEMS = REQUEST_ITEMS;
  messages[key].RECEIVE_ITEMS_SUCCESS = RECEIVE_ITEMS_SUCCESS;
  messages[key].RECEIVE_ITEMS_ERROR = RECEIVE_ITEMS_ERROR;

  function requestItems () {
    return {
      type: REQUEST_ITEMS,
    };
  }

  function receiveItemsSuccess (json) {
    return {
      type: RECEIVE_ITEMS_SUCCESS,
      items: json,
    };
  }

  function receiveItemsError (error) {
    return {
      type: RECEIVE_ITEMS_ERROR,
      error,
    };
  }

  function fetchItems (_id) {
    return dispatch => {
      dispatch(requestItems());

      return fetch(!_id ? uri : `${uri}/${_id}`)
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
    const items = state[key];
    return !items || (Object.keys(items.items).length === 0 &&
      !items.isFetching);
  }

  actions[itemAction] = function (_id, reload) {
    return (dispatch, getState) => {
      return reload || !getState()[key][_id] ? dispatch(fetchItems(_id))
        : [];
    };
  };

  actions[itemsAction] = function (reload) {
    return (dispatch, getState) => {
      if (reload || shouldFetchItems(getState())) {
        return dispatch(fetchItems());
      }
    };
  };
});

export {
  messages as fetchMessages,
  actions as fetchActions,
};
