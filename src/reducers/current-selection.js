import {uiActions} from '../actions';

const {SELECT_ITEM, UNSELECT_ITEM, EDIT_SELECTION, CLOSE_SELECTION,
  START_NAMING_SELECTION, STOP_NAMING_SELECTION, DISPLAY_SELECTION_NAME} =
  uiActions;

export const resetCurrentSelection = () => {
  return {selectionId: '', item: undefined, items: [], isBeingNamed: false,
    isBeingUpdated: false, itemsChanged: false};
};

export function currentSelection (state = {
  selectionId: '',
  isBeingNamed: false,
  itemsChanged: false,
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
    return {...state, items: {...state.items, ...items}, itemsChanged: true};

  case UNSELECT_ITEM:
    if (!state.items[_id]) {
      return state;
    }
    Object.assign(items, state.items);
    delete items[_id];
    return {...state, items, itemsChanged: true};

  case EDIT_SELECTION:
    return {...state, ...action, isBeingUpdated: true};

  case CLOSE_SELECTION:
    return resetCurrentSelection();

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
