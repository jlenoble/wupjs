import {fetchActions, createActions, updateActions} from '../db';
import {uiActions} from '../ui';

const newItem = createActions.newItem;

const _fetchSelection = fetchActions.fetchSelectionIfNeeded;
const _fetchSelections = fetchActions.fetchSelectionsIfNeeded;
const _newSelection = createActions.newSelection;
const _updateSelection = updateActions.updateSelection;

const {displaySelectionName, stopNamingSelection} = uiActions;

export function fetchSelectionIfNeeded (item, reload) {
  return _fetchSelection(item, reload);
}

export function fetchSelectionsIfNeeded () {
  return _fetchSelections();
}

export function newSelection ({title}) {
  return async (dispatch, getState) => {
    try {
      const item = await dispatch(newItem({title}));
      await dispatch(displaySelectionName(item));

      const items = Object.keys(getState().currentSelection.items);
      const itemId = item._id;

      await dispatch(_newSelection({itemId, items}, json => {
        return !json.itemId || !Array.isArray(json.items);
      }));
    } catch (e) {
      await dispatch(stopNamingSelection());
    }
  };
}

export function updateSelection (item) {
  return (dispatch, getState) => {
    const selectionId = item.selectionId;
    const {selections, currentSelection} = getState();
    const previousSelection = selections[selectionId];
    const items = Object.keys(currentSelection.items);
    return dispatch(_updateSelection({_id: selectionId, itemId: item._id,
      items}, previousSelection));
  };
}
