import {uiActions} from '../actions';

const {
  ADD_SELECTION,
  CLOSE_SELECTION,
  DISPLAY_SELECTION_NAME,
  EDIT_SELECTION,
  SELECT_ITEM,
  START_NAMING_SELECTION,
  UNSELECT_ITEM,
  STOP_NAMING_SELECTION,
} = uiActions;

export const resetCurrentSelection = () => {
  return {selectionId: '', item: undefined, items: [], isBeingNamed: false,
    isBeingUpdated: false, isJustBeingCreated: false, itemsChanged: false};
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
  case ADD_SELECTION:
    return {...resetCurrentSelection(), isJustBeingCreated: true};

  case CLOSE_SELECTION:
    return resetCurrentSelection();

  case DISPLAY_SELECTION_NAME:
    return {...state, isBeingNamed: false, item: {...action.item}};

  case EDIT_SELECTION:
    return {...state, ...action, isBeingUpdated: true, itemsChanged: false};

  case SELECT_ITEM:
    if (state.items[_id] || (state.item &&
      state.item._id === action.item._id)) { // Don't add oneself to selection
      return state;
    }
    items[_id] = action.item;
    return {...state, items: {...state.items, ...items}, itemsChanged: true};

  case START_NAMING_SELECTION:
    return {...state, isBeingNamed: true, isJustBeingCreated: false};

  case STOP_NAMING_SELECTION:
    return {...state, isBeingNamed: false};

  case UNSELECT_ITEM:
    if (!state.items[_id]) {
      return state;
    }
    Object.assign(items, state.items);
    delete items[_id];
    return {...state, items, itemsChanged: true};

  default:
    return state;
  }
}
