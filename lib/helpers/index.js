'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeHandleChange = require('./make-handle-change');

Object.keys(_makeHandleChange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _makeHandleChange[key];
    }
  });
});

var _makeIsProp = require('./make-is-prop');

Object.keys(_makeIsProp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _makeIsProp[key];
    }
  });
});

var _setFuncName = require('./set-func-name');

Object.keys(_setFuncName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setFuncName[key];
    }
  });
});