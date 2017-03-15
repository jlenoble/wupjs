'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemIsEditedWithinCard = exports.getItemsFromSelection = exports.getItemsFromSelectionMap = exports.getItemsFromItemMap = exports.getCurrentSelectionMap = exports.getMapOfAllSelections = exports.getMapOfAllItems = undefined;

var _store = require('../../server/store');

// Get map of all {_id, title}
var getMapOfAllItems = exports.getMapOfAllItems = function getMapOfAllItems() {
  return (0, _store.getState)().items.items;
};

// Get map of all {_id, itemId, items}
var getMapOfAllSelections = exports.getMapOfAllSelections = function getMapOfAllSelections() {
  return (0, _store.getState)().selections.items;
};

// Get map of all currently selected {_id, title}
var getCurrentSelectionMap = exports.getCurrentSelectionMap = function getCurrentSelectionMap() {
  return (0, _store.getState)().currentSelection.items;
};

// Get array of {_id, title} from map of {_id, title}
var getItemsFromItemMap = exports.getItemsFromItemMap = function getItemsFromItemMap(itemMap) {
  return Object.keys(itemMap).map(function (_id) {
    return itemMap[_id];
  });
};

// Get array of {_id, title} using itemId from map of {_id, itemId, items}
var getItemsFromSelectionMap = exports.getItemsFromSelectionMap = function getItemsFromSelectionMap(selectionMap) {
  var itemMap = getMapOfAllItems();
  return Object.keys(selectionMap).map(function (_id) {
    return itemMap[selectionMap[_id].itemId];
  });
};

// Get array of {_id, title} using items from single {_id, itemId, items}
var getItemsFromSelection = exports.getItemsFromSelection = function getItemsFromSelection(selection) {
  var itemMap = getMapOfAllItems();
  return selection.items.map(function (_id) {
    return itemMap[_id];
  });
};

var itemIsEditedWithinCard = exports.itemIsEditedWithinCard = function itemIsEditedWithinCard(item, card, _ref) {
  var _id = _ref._id,
      isBeingEdited = _ref.isBeingEdited,
      cardName = _ref.cardName;

  return isBeingEdited && item._id === _id && card.name === cardName;
};