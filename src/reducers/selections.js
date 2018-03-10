import {
  REQUEST_SELECTIONS, RECEIVE_SELECTIONS_SUCCESS, RECEIVE_SELECTIONS_ERROR,
  CREATE_SELECTION, CREATE_SELECTION_SUCCESS, CREATE_SELECTION_ERROR,
} from '../actions';

export function selections (state = {
  isFetching: false,
  items: {},
}, action) {
  let items;

  switch (action.type) {
  case REQUEST_SELECTIONS:
    return Object.assign({}, state, {
      isFetching: true,
    });

  case RECEIVE_SELECTIONS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items.reduce((obj, item) => {
        obj[item._id] = item; // eslint-disable-line no-param-reassign
        return obj;
      }, {}),
    });

  case RECEIVE_SELECTIONS_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
    });

  case CREATE_SELECTION:
    items = Object.assign({}, state.items);
    items[action.selection._id] = action.selection;
    return Object.assign({}, state, {
      isFetching: true,
      items,
    });

  case CREATE_SELECTION_SUCCESS:
    items = Object.assign({}, state.items);
    delete items[action._id];
    items[action.selection._id] = action.selection;
    return {
      isFetching: false,
      items,
    };

  case CREATE_SELECTION_ERROR:
    items = Object.assign({}, state.items);
    delete items[action._id];
    return {
      isFetching: false,
      items,
    };

  default:
    return state;
  }
}
