import {fetchMessages, createMessages, updateMessages, deleteMessages,
  collections} from '../actions';

const reducers = {};

collections.forEach(key => {
  const {REQUEST_ITEMS, RECEIVE_ITEMS_SUCCESS, RECEIVE_ITEMS_ERROR} =
    fetchMessages[key];
  const {CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_ERROR} =
    createMessages[key];
  const {UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR} =
    updateMessages[key];
  const {DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_ERROR} =
    deleteMessages[key];

  reducers[key] = function (state = {
    isFetching: false,
    items: {},
  }, action) {
    let items;

    switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.reduce((obj, item) => {
          obj[item._id] = item; // eslint-disable-line no-param-reassign
          return obj;
        }, {}),
      });

    case CREATE_ITEM:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return Object.assign({}, state, {
        isFetching: true,
        items,
      });

    case CREATE_ITEM_SUCCESS:
      items = Object.assign({}, state.items);
      delete items[action._id];
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items,
      };

    case CREATE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      delete items[action._id];
      return {
        isFetching: false,
        items,
      };

    case DELETE_ITEM:
      items = Object.assign({}, state.items);
      delete items[action._id];
      return {
        isFetching: true,
        items,
      };

    case DELETE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items,
      };

    case UPDATE_ITEM:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: true,
        items,
      };

    case UPDATE_ITEM_ERROR:
      items = Object.assign({}, state.items);
      items[action.item._id] = action.item;
      return {
        isFetching: false,
        items,
      };

    case RECEIVE_ITEMS_ERROR:
    case UPDATE_ITEM_SUCCESS:
    case DELETE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
      });

    default:
      return state;
    }
  };
});

export default reducers;
