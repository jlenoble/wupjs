import {fetchActions, createActions} from '../db';
import {uiActions} from '../ui';

const newItem = createActions.newItem;

const _fetchSelections = fetchActions.fetchSelectionsIfNeeded;
const _newSelection = createActions.newSelection;

const {displaySelectionName, stopNamingSelection} = uiActions;

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
