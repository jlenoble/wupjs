import {
  SELECT_ITEM, UNSELECT_ITEM,
} from '../actions';

export function currentSelection (state = {
  items: [],
}, action) {
  switch (action.type) {
  case SELECT_ITEM:
    return Object.assign({}, state, {
      items: state.items.concat(Object.assign({}, action.item)),
    });

  case UNSELECT_ITEM:
    return Object.assign({}, state, {
      items: state.items.filter(item => {
        return item._id !== action._id;
      }),
    });

  default:
    return state;
  }
}
