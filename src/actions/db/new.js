import fetch from '../../server/fetch';
import collections from '../collections';
import tmpId from './tmp-id';

const messages = {};
const actions = {};

collections.forEach(key => {
  const skey = key.slice(0, key.length - 1);
  const ITEM = skey.toUpperCase();
  const Name = skey[0].toUpperCase() + skey.slice(1);
  const action = `new${Name}`;
  const uri = `/api/${key}`;

  const CREATE_ITEM = `CREATE_${ITEM}`;
  const CREATE_ITEM_SUCCESS = `CREATE_${ITEM}_SUCCESS`;
  const CREATE_ITEM_ERROR = `CREATE_${ITEM}_ERROR`;

  messages[key] = {};

  messages[key].CREATE_ITEM = CREATE_ITEM;
  messages[key].CREATE_ITEM_SUCCESS = CREATE_ITEM_SUCCESS;
  messages[key].CREATE_ITEM_ERROR = CREATE_ITEM_ERROR;

  function createItem (item) {
    return {
      type: CREATE_ITEM,
      item,
    };
  }

  function createItemSuccess (item, _id) {
    return {
      type: CREATE_ITEM_SUCCESS,
      item, _id,
    };
  }

  function createItemError (item, _id, error) {
    return {
      type: CREATE_ITEM_ERROR,
      item, _id, error,
    };
  }

  actions[action] = function (_item, fail = json => !json.title) {
    return (dispatch, getState) => {
      const _id = tmpId();
      const item = Object.assign({}, _item, {_id});

      dispatch(createItem(item));

      return fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
        .then(json => {
          if (!json._id || fail(json)) {
            dispatch(createItemError(item, _id, json));
          } else {
            dispatch(createItemSuccess(json, _id));
            return json;
          }
        });
    };
  };
});

export {
  messages as createMessages,
  actions as createActions,
};
