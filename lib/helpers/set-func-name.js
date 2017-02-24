'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setFuncName = exports.setFuncName = function setFuncName(Func, name) {
  Object.defineProperty(Func, 'name', { value: name });
};