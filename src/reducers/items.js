import {
  REQUEST_ITEMS, RECEIVE_ITEMS_SUCCESS, RECEIVE_ITEMS_ERROR,
  CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_ERROR,
  UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR,
  DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_ERROR,
} from '../actions';

export function items (state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
  case REQUEST_ITEMS:
    return Object.assign({}, state, {
      isFetching: true,
    });

  case RECEIVE_ITEMS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items,
    });

  case CREATE_ITEM:
    return Object.assign({}, state, {
      isFetching: true,
      items: state.items.concat(Object.assign({
        _id: action._id,
      }, action.item)),
    });

  case CREATE_ITEM_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      items: state.items.map(item => {
        return item._id !== action._id ? item : action.item;
      }),
    });

  case CREATE_ITEM_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      items: state.items.filter(item => {
        return item._id !== action._id;
      }),
    });

  case DELETE_ITEM:
    return Object.assign({}, state, {
      isFetching: true,
      items: state.items.filter(item => {
        return item._id !== action._id;
      }),
    });

  case DELETE_ITEM_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      items: state.items.concat(action.item),
    });

  case UPDATE_ITEM:
    return Object.assign({}, state, {
      isFetching: true,
      items: state.items.map(item => {
        return item._id !== action._id ? item : {
          title: action.title,
          _id: item._id,
        };
      }),
    });

  case UPDATE_ITEM_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      items: state.items.map(item => {
        return item._id !== action._id ? item : {
          title: action.title,
          _id: item._id,
        };
      }),
    });

  case RECEIVE_ITEMS_ERROR:
  case UPDATE_ITEM_SUCCESS:
  case DELETE_ITEM_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
    });

  default:
    return state;
  }
}
