import {uiActions} from '../actions';

const {SELECT_ITEM, UNSELECT_ITEM, START_NAMING_SELECTION,
  STOP_NAMING_SELECTION, DISPLAY_SELECTION_NAME} = uiActions;

export function currentSelection (state = {
  isBeingNamed: false,
  items: {},
}, action) {
  const _id = action.item ? action.item._id : '';
  const items = {};

  switch (action.type) {
  case SELECT_ITEM:
    if (state.items[_id] || (state.item &&
      state.item._id === action.item._id)) { // Don't add oneself to selection
      return state;
    }
    items[_id] = action.item;
    return {...state, items: {...state.items, ...items}};

  case UNSELECT_ITEM:
    if (!state.items[_id]) {
      return state;
    }
    Object.assign(items, state.items);
    delete items[_id];
    return {...state, items};

  case START_NAMING_SELECTION:
    return {...state, isBeingNamed: true};

  case STOP_NAMING_SELECTION:
    return {...state, isBeingNamed: false};

  case DISPLAY_SELECTION_NAME:
    return {...state, isBeingNamed: false, item: {...action.item}};

  default:
    return state;
  }
}
