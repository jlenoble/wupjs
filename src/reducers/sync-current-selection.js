import {createMessages, updateMessages, deleteMessages} from '../actions';

const CREATE_SELECTION_SUCCESS = createMessages.selections.CREATE_ITEM_SUCCESS;
const {UPDATE_ITEM, UPDATE_ITEM_ERROR} = updateMessages.items;
const {DELETE_ITEM, DELETE_ITEM_ERROR} = deleteMessages.items;

export const syncCurrentSelection = (state, action) => {
  const {currentSelection} = state;

  if (currentSelection.item && action.item) {
    if (currentSelection.item._id === action.item._id) {
      switch (action.type) {
      case UPDATE_ITEM:
      case UPDATE_ITEM_ERROR:
      case DELETE_ITEM_ERROR:
        return {...state, currentSelection: {...currentSelection,
          item: action.item}};
        break;

      case CREATE_SELECTION_SUCCESS:
      case DELETE_ITEM:
        return {...state, currentSelection: {...currentSelection,
          item: undefined, items: []}};
        break;

      default:
        break;
      }
    }
  }

  if (currentSelection.item && action.item) {
    if (currentSelection.item._id === action.item.itemId) {
      switch (action.type) {
      case CREATE_SELECTION_SUCCESS:
        return {...state, currentSelection: {...currentSelection,
          item: undefined, items: []}};
        break;

      default:
        break;
      }
    }
  }

  return state;
};
