'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _items = require('./items');

var _currentItem = require('./current-item');

var _currentSelection = require('./current-selection');

var _selections = require('./selections');

var reducers = (0, _redux.combineReducers)({
  items: _items.items,
  currentItem: _currentItem.currentItem,
  currentSelection: _currentSelection.currentSelection,
  selections: _selections.selections
});

exports.default = reducers;
module.exports = exports['default'];