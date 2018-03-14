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
      return {...state, isFetching: true};

    case RECEIVE_ITEMS_SUCCESS:
      items = {...state.items};
      action.items.forEach(item => {
        items[item._id] = item;
      });
      return {...state, isFetching: false, items};

    case CREATE_ITEM:
      items = {...state.items};
      items[action.item._id] = action.item;
      return {...state, isFetching: true, items};

    case CREATE_ITEM_SUCCESS:
      items = {...state.items};
      delete items[action._id];
      items[action.item._id] = action.item;
      return {isFetching: false, items};

    case CREATE_ITEM_ERROR:
      items = {...state.items};
      delete items[action._id];
      return {isFetching: false, items};

    case DELETE_ITEM:
      items = {...state.items};
      delete items[action.item._id];
      return {isFetching: true, items};

    case DELETE_ITEM_ERROR:
      items = {...state.items};
      items[action.item._id] = action.item;
      return {isFetching: false, items};

    case UPDATE_ITEM:
      items = {...state.items};
      items[action.item._id] = action.item;
      return {isFetching: true, items};

    case UPDATE_ITEM_ERROR:
      items = {...state.items};
      items[action.item._id] = action.item;
      return {isFetching: false, items};

    case RECEIVE_ITEMS_ERROR:
    case UPDATE_ITEM_SUCCESS:
    case DELETE_ITEM_SUCCESS:
      return {...state, isFetching: false};

    default:
      return state;
    }
  };
});

export default reducers;
