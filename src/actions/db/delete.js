import fetch from '../../server/fetch';
import collections from '../collections';

const messages = {};
const actions = {};

collections.forEach(key => {
  const skey = key.slice(0, key.length - 1);
  const ITEM = skey.toUpperCase();
  const Name = skey[0].toUpperCase() + skey.slice(1);
  const action = `delete${Name}`;
  const uri = `/api/${key}/`;

  const DELETE_ITEM = `DELETE_${ITEM}`;
  const DELETE_ITEM_SUCCESS = `DELETE_${ITEM}_SUCCESS`;
  const DELETE_ITEM_ERROR = `DELETE_${ITEM}_ERROR`;

  messages[key] = {};

  messages[key].DELETE_ITEM = DELETE_ITEM;
  messages[key].DELETE_ITEM_SUCCESS = DELETE_ITEM_SUCCESS;
  messages[key].DELETE_ITEM_ERROR = DELETE_ITEM_ERROR;

  function requestDeleteItem (_id) {
    return {
      type: DELETE_ITEM,
      _id,
    };
  }

  function deleteItemSuccess () {
    return {
      type: DELETE_ITEM_SUCCESS,
    };
  }

  function deleteItemError (item, error) {
    return {
      type: DELETE_ITEM_ERROR,
      item, error,
    };
  }

  actions[action] = function (item) {
    const {_id} = item;

    return dispatch => {
      dispatch(requestDeleteItem(_id));

      return fetch(uri + _id, {
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
  };
});

export {
  messages as deleteMessages,
  actions as deleteActions,
};
