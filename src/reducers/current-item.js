import {uiActions} from '../actions';

const {EDIT_ITEM, UNFOCUS_CURRENT_ITEM} = uiActions;

export function currentItem (state = {
  isBeingEdited: false,
  _id: '',
  title: '',
  cardName: '',
}, action) {
  switch (action.type) {
  case EDIT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: true,
      _id: action._id,
      title: action.title,
      cardName: action.cardName,
    });

  case UNFOCUS_CURRENT_ITEM:
    return Object.assign({}, state, {
      isBeingEdited: false,
      _id: '',
      title: '',
      cardName: '',
    });

  default:
    return state;
  }
}
