import {combineReducers} from 'redux';
import {
  REQUEST_ITEMS, RECEIVE_ITEMS_SUCCESS, RECEIVE_ITEMS_ERROR,
  CREATE_ITEM,
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

  case RECEIVE_ITEMS_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
    });

  case CREATE_ITEM:
    return Object.assign({}, state, {
      isFetching: true,
      items: state.items.concat(action.item),
    });

  default:
    return state;
  }
}

const reducers = combineReducers({
  items,
});

export default reducers;
