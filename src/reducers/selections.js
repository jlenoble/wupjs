import {
  REQUEST_SELECTIONS, RECEIVE_SELECTIONS_SUCCESS, RECEIVE_SELECTIONS_ERROR,
} from '../actions';

export function selections (state = {
  isFetching: false,
  items: {},
}, action) {
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

  default:
    return state;
  }
}
