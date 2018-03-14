import {createMessages, updateMessages, deleteMessages} from '../actions';

const CREATE_SELECTION_SUCCESS = createMessages.selections.CREATE_ITEM_SUCCESS;
const UPDATE_SELECTION_SUCCESS = updateMessages.selections.UPDATE_ITEM_SUCCESS;
const DELETE_SELECTION = deleteMessages.selections.DELETE_ITEM;
const {UPDATE_ITEM, UPDATE_ITEM_ERROR} = updateMessages.items;
const {DELETE_ITEM, DELETE_ITEM_ERROR} = deleteMessages.items;

const resetCurrentSelection = (state, currentSelection) => {
  return {...state, currentSelection: {isBeingUpdated: false, selectionId: '',
    item: undefined, items: [], isBeingNamed: false, itemsChanged: false}};
};

export const syncCurrentSelection = (state, action) => {
  const {currentSelection} = state;

  if (currentSelection.item && action.item) {
    // Dealing with the header item

    if (currentSelection.item._id === action.item._id) {
      switch (action.type) {
      case UPDATE_ITEM:
      case UPDATE_ITEM_ERROR:
      case DELETE_ITEM_ERROR:
        return {...state, currentSelection: {...currentSelection,
          item: {...currentSelection.item, ...action.item}}};
        break;

      case CREATE_SELECTION_SUCCESS:
      case DELETE_ITEM:
        return resetCurrentSelection(state, currentSelection);
        break;

      default:
        break;
      }
    }

    if (currentSelection.item._id === action.item.itemId) {
      switch (action.type) {
      case CREATE_SELECTION_SUCCESS:
        return resetCurrentSelection(state, currentSelection);
        break;

      default:
        break;
      }
    }
  }

  if (action.item && currentSelection.items[action.item._id]) {
    // Dealing with a block item

    const items = [...currentSelection.items];
    let itemsChanged = false;

    switch (action.type) {
    case DELETE_ITEM_ERROR:
      itemsChanged = true;
    // Fall through
    case UPDATE_ITEM:
    case UPDATE_ITEM_ERROR:
      items[action.item._id] = action.item;
      break;

    case DELETE_ITEM:
      itemsChanged = true;
      delete items[action.item._id];
      break;

    default:
      return state;
    }

    return {...state, currentSelection: {...currentSelection, items,
      itemsChanged}};
  }

  switch (action.type) {
  case UPDATE_SELECTION_SUCCESS:
    return {...state, currentSelection: {...currentSelection,
      itemsChanged: false}};

  case DELETE_SELECTION:
    if (action.item._id === currentSelection.selectionId) {
      return resetCurrentSelection(state, currentSelection);
    }

  default:
    break;
  }

  return state;
};
