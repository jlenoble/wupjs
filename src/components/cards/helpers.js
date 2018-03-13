// Get map of all {_id, title}
export const getMapOfAllItems = state => {
  return state.items.items;
};

// Get map of all {_id, itemId, items}
export const getMapOfAllSelections = state => {
  return state.selections.items;
};

// Get map of all currently selected {_id, title}
export const getCurrentSelectionMap = state => {
  return state.currentSelection.items;
};

// // Get array of {_id, title} from array [..._ids]
// export const getItemsFromItemIds = itemIds => {
//   const itemMap = getMapOfAllItems();
//   return itemIds.map(_id => itemMap[_id]);
// };

// Get array of {_id, title} from map of {_id, title}
export const getItemsFromItemMap = itemMap => {
  return Object.keys(itemMap).map(_id => itemMap[_id]);
};

// Get array of {_id, title} using itemId from map of {_id, itemId, items}
export const getItemsFromSelectionMap = (state, selectionMap) => {
  const itemMap = getMapOfAllItems(state);
  return Object.keys(selectionMap).map(_id => itemMap[
    selectionMap[_id].itemId]);
};

// // Get array of {_id, title} using items from single {_id, itemId, items}
// export const getItemsFromSelection = selection => {
//   const itemMap = getMapOfAllItems();
//   return selection.items.map(_id => itemMap[_id]);
// };
//
// // Get map of items from {items: array of {_id, title}}
// export const getItemMapFromSelection = selection => {
//   const itemMap = getMapOfAllItems();
//   let items = {};
//   selection.items.forEach(_id => {
//     items[_id] = itemMap[_id];
//   });
//   return items;
// };
//
// // Find selection with itemId matching item._id
// export const getSelectionFromItem = item => {
//   const selections = getMapOfAllSelections();
//   let selection;
//   Object.keys(selections).some(key => {
//     if (selections[key].itemId === item._id) {
//       selection = selections[key];
//       return true;
//     }
//   });
//   return selection;
// };

export const itemIsEditedWithinCard = (item, {_id, isBeingEdited, selectionId},
  refSelectionId) => {
  return isBeingEdited && item._id === _id && refSelectionId === selectionId;
};

export const updateEditedFlags = (items, currentItem, selectionId) => items.map(
  item => ({
    ...item,
    isBeingEdited: itemIsEditedWithinCard(item, currentItem, selectionId),
    selectionId,
  }));
