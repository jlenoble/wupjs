'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemUiDefaultProps = exports.itemUiPropType = exports.extendItemsPropType = exports.itemsPropType = exports.extendItemPropType = exports.itemPropType = undefined;

var _react = require('react');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Schema: {_id: 'string'}
// Shape: {_id: PropTypes.string}
// Checker: PropTypes.shape(Shape)

// Helpers

var getChecker = function getChecker(type) {
  switch (type) {
    case 'funcs':
    case 'strings':
    case 'bools':
    case 'elements':
      var cut = type.length - 1;
      return _react.PropTypes.arrayOf(_react.PropTypes[type.slice(0, cut)].isRequired);

    default:
      return _react.PropTypes[type];
  }
};

var schemaToShape = function schemaToShape(schema) {
  var shape = {};
  Object.keys(schema).forEach(function (key) {
    shape[key] = getChecker(schema[key]).isRequired;
  });
  return shape;
};

var shapeToChecker = function shapeToChecker(shape) {
  return _react.PropTypes.shape(shape);
};

var mergeObjects = function mergeObjects() {
  for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return objects.reduce(function (o1, o2) {
    return Object.assign(o1, o2);
  }, {});
};

var makeCheckerFromShapes = function makeCheckerFromShapes() {
  return shapeToChecker(mergeObjects.apply(undefined, arguments));
};

var makeCheckerFromSchemas = function makeCheckerFromSchemas() {
  for (var _len2 = arguments.length, schemas = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    schemas[_key2] = arguments[_key2];
  }

  return makeCheckerFromShapes.apply(undefined, _toConsumableArray(schemas.map(schemaToShape)));
};

// Item

var itemSchema = {
  title: 'string',
  _id: 'string'
};

var itemPropType = exports.itemPropType = makeCheckerFromSchemas(itemSchema);
var extendItemPropType = exports.extendItemPropType = function extendItemPropType(schema) {
  return makeCheckerFromSchemas(itemSchema, schema);
};

// List of Items

var itemsPropType = exports.itemsPropType = _react.PropTypes.arrayOf(itemPropType.isRequired);
var extendItemsPropType = exports.extendItemsPropType = function extendItemsPropType(schema) {
  return _react.PropTypes.arrayOf(extendItemPropType(schema).isRequired);
};

// Item UI

var itemUiSchema = {
  buttons: 'funcs',
  checkboxes: 'funcs'
};

var itemUiPropType = exports.itemUiPropType = makeCheckerFromSchemas(itemUiSchema);
var itemUiDefaultProps = exports.itemUiDefaultProps = {
  ui: {
    buttons: [],
    checkboxes: []
  }
};