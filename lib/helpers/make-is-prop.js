'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (stem) {
  var _stem = stem.toLowerCase();
  var len = stem.length;

  if (_stem.slice(len - 2) === 'ed') {
    _stem = _stem.slice(0, len - 2);
  }

  if (_stem.slice(0, 2) === 'is') {
    _stem = _stem.slice(2);
  }

  return 'is' + _stem[0].toUpperCase() + _stem.slice(1) + 'ed';
};

module.exports = exports['default'];