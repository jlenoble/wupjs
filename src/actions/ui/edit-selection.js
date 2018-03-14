import {addAction} from './helpers';
import {getSelectionFromItem, getItemMapFromSelection}
  from '../../components/cards/helpers';

addAction('EDIT_SELECTION', item => {
  const selection = getSelectionFromItem(item.state, item);
  const items = getItemMapFromSelection(item.state, selection);
  const selectionId = selection._id;
  return {selectionId, item: {...item, selectionId}, items};
});
