import {
  EDIT_ITEM, UNFOCUS_CURRENT_ITEM,
} from '../actions';

export function currentItem (state = {
  isBeingEdited: false,
  itemId: '',
}, action) {
  switch (action.type) {
  case EDIT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: true,
      itemId: action._id,
    });

  case UNFOCUS_CURRENT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: false,
      itemId: '',
    });

  default:
    return state;
  }
}
