import {updateMessages, deleteMessages} from '../actions';

const {UPDATE_ITEM, UPDATE_ITEM_ERROR} = updateMessages.items;
const {DELETE_ITEM, DELETE_ITEM_ERROR} = deleteMessages.items;

export const syncCurrentSelection = (state, action) => {
  const {currentSelection} = state;

  switch (action.type) {
  case UPDATE_ITEM:
  case UPDATE_ITEM_ERROR:
  case DELETE_ITEM_ERROR:
    if (currentSelection.item) {
      if (currentSelection.item._id === action.item._id) {
        return Object.assign({}, state, {
          currentSelection: Object.assign({}, currentSelection, {
            item: action.item,
          }),
        });
      }
    }
    break;

  case DELETE_ITEM:
    if (currentSelection.item) {
      if (currentSelection.item._id === action._id) {
        return Object.assign({}, state, {
          currentSelection: Object.assign({}, currentSelection, {
            item: undefined,
          }),
        });
      }
    }
    break;

  default:
    break;
  }

  return state;
};