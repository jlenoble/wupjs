import {getState} from '../../server/store';

// Get map of all {_id, title}
export const getMapOfAllItems = () => {
  return getState().items.items;
};

// Get map of all {_id, itemId, items}
export const getMapOfAllSelections = () => {
  return getState().selections.items;
};

// Get map of all currently selected {_id, title}
export const getCurrentSelectionMap = () => {
  return getState().currentSelection.items;
};

// Get array of {_id, title} from map of {_id, title}
export const getItemsFromItemMap = itemMap => {
  return Object.keys(itemMap).map(_id => itemMap[_id]);
};

// Get array of {_id, title} using itemId from map of {_id, itemId, items}
export const getItemsFromSelectionMap = selectionMap => {
  const itemMap = getMapOfAllItems();
  return Object.keys(selectionMap).map(_id => itemMap[
    selectionMap[_id].itemId]);
};

// Get array of {_id, title} using items from single {_id, itemId, items}
export const getItemsFromSelection = selection => {
  const itemMap = getMapOfAllItems();
  return selection.items.map(_id => itemMap[_id]);
};

export const getItemMapFromSelection = selection => {
  const itemMap = getMapOfAllItems();
  let items = {};
  selection.items.forEach(_id => {
    items[_id] = itemMap[_id];
  });
  return items;
};

export const getSelectionFromItem = item => {
  const selections = getMapOfAllSelections();
  let selection;
  Object.keys(selections).some(key => {
    if (selections[key].itemId === item._id) {
      selection = selections[key];
      return true;
    }
  });
  return selection;
};

export const itemIsEditedWithinCard = (item, card, {
  _id, isBeingEdited, cardName}) => {
  return isBeingEdited && item._id === _id && card.name === cardName;
};

export const updateEditedFlags = (items, currentItem, Card) => items.map(
  item => ({
    ...item,
    isBeingEdited: itemIsEditedWithinCard(item, Card, currentItem),
    cardName: Card.name,
  }));
