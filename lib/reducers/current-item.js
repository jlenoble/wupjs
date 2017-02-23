'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentItem = currentItem;

var _actions = require('../actions');

function currentItem() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isBeingEdited: false,
    _id: '',
    title: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.EDIT_ITEM:
      return Object.assign({}, state, {
        isBeingEdited: true,
        _id: action._id,
        title: action.title
      });

    case _actions.UNFOCUS_CURRENT_ITEM:
      return Object.assign({}, state, {
        isBeingEdited: false,
        _id: '',
        title: ''
      });

    default:
      return state;
  }
}