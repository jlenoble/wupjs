import {
  SELECT_ITEM, UNSELECT_ITEM, START_NAMING_SELECTION, STOP_NAMING_SELECTION,
  DISPLAY_SELECTION_NAME,
} from '../actions';

export function currentSelection (state = {
  isBeingNamed: false,
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

  case START_NAMING_SELECTION:
    return Object.assign({}, state, {
      isBeingNamed: true,
    });

  case STOP_NAMING_SELECTION:
    return Object.assign({}, state, {
      isBeingNamed: false,
    });

  case DISPLAY_SELECTION_NAME:
    return Object.assign({}, state, {
      isBeingNamed: false,
      item: Object.assign({}, action.item),
    });

  default:
    return state;
  }
}
