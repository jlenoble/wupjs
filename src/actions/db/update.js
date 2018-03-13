import fetch from '../../server/fetch';
import collections from '../collections';

const messages = {};
const actions = {};

collections.forEach(key => {
  const skey = key.slice(0, key.length - 1);
  const ITEM = skey.toUpperCase();
  const Name = skey[0].toUpperCase() + skey.slice(1);
  const action = `update${Name}`;
  const uri = `/api/${key}/`;

  const UPDATE_ITEM = `UPDATE_${ITEM}`;
  const UPDATE_ITEM_SUCCESS = `UPDATE_${ITEM}_SUCCESS`;
  const UPDATE_ITEM_ERROR = `UPDATE_${ITEM}_ERROR`;

  messages[key] = {};

  messages[key].UPDATE_ITEM = UPDATE_ITEM;
  messages[key].UPDATE_ITEM_SUCCESS = UPDATE_ITEM_SUCCESS;
  messages[key].UPDATE_ITEM_ERROR = UPDATE_ITEM_ERROR;

  function requestUpdateItem (item) {
    return {
      type: UPDATE_ITEM,
      item, _id: item._id,
    };
  }

  function updateItemSuccess () {
    return {
      type: UPDATE_ITEM_SUCCESS,
    };
  }

  function updateItemError (item, error) {
    return {
      type: UPDATE_ITEM_ERROR,
      item, _id: item._id, error,
    };
  }

  actions[action] = function (item, previousItem) {
    const {title, _id} = item;

    return dispatch => {
      dispatch(requestUpdateItem(item));

      return fetch(uri + _id, {
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
  };
});

export {
  messages as updateMessages,
  actions as updateActions,
};
