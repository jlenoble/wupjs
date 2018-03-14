import {addAction} from './helpers';
import {getSelectionFromItem, getItemMapFromSelection}
  from '../../components/cards/helpers';

addAction('EDIT_SELECTION', (item, state) => {
  const selection = getSelectionFromItem(state, item);
  const items = getItemMapFromSelection(state, selection);
  const selectionId = selection._id;
  return {selectionId, item: {...item, selectionId}, items};
});

addAction('START_NAMING_SELECTION');
addAction('STOP_NAMING_SELECTION');
addAction('DISPLAY_SELECTION_NAME');
