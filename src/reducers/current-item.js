import {uiActions} from '../actions';

const {EDIT_ITEM, UNFOCUS_CURRENT_ITEM} = uiActions;

export function currentItem (state = {
  isBeingEdited: false,
  _id: '',
  title: '',
  selectionId: '',
}, action) {
  switch (action.type) {
  case EDIT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: true,
      _id: action._id,
      title: action.title,
      selectionId: action.selectionId,
    });

  case UNFOCUS_CURRENT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: false,
      _id: '',
      title: '',
      selectionId: '',
    });

  default:
    return state;
  }
}
