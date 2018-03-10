import {UPDATE_ITEM, UPDATE_ITEM_ERROR} from '../actions';

export const syncSelections = (state, action) => {
  const {currentSelection} = state;

  switch (action.type) {
  case UPDATE_ITEM:
  case UPDATE_ITEM_ERROR:
    if (currentSelection.item) {
      if (currentSelection.item._id === action.item._id) {
        return Object.assign({}, state, {
          currentSelection: Object.assign({}, currentSelection, {
            item: action.item,
          }),
        });
      }
    }

  default:
    return state;
  }
};
