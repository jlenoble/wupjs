import {
  SELECT_ITEM, UNSELECT_ITEM,
} from '../actions';

export function currentSelection (state = {
  items: {},
}, action) {
  const _id = action.item ? action.item._id : '';
  const items = {};

  switch (action.type) {
  case SELECT_ITEM:
    if (state.items[_id]) {
      return state;
    }
    items[_id] = action.item;
    return {
      items: Object.assign({}, state.items, items),
    };

  case UNSELECT_ITEM:
    if (!state.items[_id]) {
      return state;
    }
    Object.assign(items, state.items);
    delete items[_id];
    return {items};

  default:
    return state;
  }
}
