import {
  EDIT_ITEM, UNFOCUS_CURRENT_ITEM,
} from '../actions';

export function currentItem (state = {
  isBeingEdited: false,
  _id: '',
  title: '',
}, action) {
  switch (action.type) {
  case EDIT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: true,
      _id: action._id,
      title: action.title,
    });

  case UNFOCUS_CURRENT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: false,
      _id: '',
      title: '',
    });

  default:
    return state;
  }
}
