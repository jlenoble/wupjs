'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setFuncName = exports.setFuncName = function setFuncName(Func, name) {
  try {
    Object.defineProperty(Func, 'name', { value: name });
  } catch (e) {
    // Do nothing: recover if readonly property error raised
  }
};