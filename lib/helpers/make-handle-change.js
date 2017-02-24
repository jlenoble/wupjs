'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHandleChange = undefined;

var _actions = require('../actions');

var makeHandleChange = exports.makeHandleChange = function makeHandleChange(doSomething, undoSomething) {
  return function (obj) {
    return function (input, dispatch) {
      dispatch((0, _actions.unfocusCurrentItem)());

      if (input.checked) {
        dispatch(doSomething(obj));
      } else {
        dispatch(undoSomething(obj));
      }
    };
  };
};