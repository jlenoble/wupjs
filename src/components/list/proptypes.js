import {PropTypes} from 'react';

// Schema: {_id: 'string'}
// Shape: {_id: PropTypes.string}
// Checker: PropTypes.shape(Shape)

// Helpers

const getChecker = type => {
  switch (type) {
  case 'funcs':
  case 'strings':
  case 'bools':
  case 'elements':
    const cut = type.length - 1;
    return PropTypes.arrayOf(PropTypes[type.slice(0, cut)].isRequired);

  default:
    return PropTypes[type];
  }
};

const schemaToShape = schema => {
  const shape = {};
  Object.keys(schema).forEach(key => {
    shape[key] = getChecker(schema[key]).isRequired;
  });
  return shape;
};

const shapeToChecker = shape => PropTypes.shape(shape);

const mergeObjects = (...objects) => objects.reduce((o1, o2) => {
  return Object.assign(o1, o2);
}, {});

const makeCheckerFromShapes = (...shapes) => {
  return shapeToChecker(mergeObjects(...shapes));
};

const makeCheckerFromSchemas = (...schemas) => {
  return makeCheckerFromShapes(...schemas.map(schemaToShape));
};

// Item

const itemSchema = {
  title: 'string',
  _id: 'string',
};

export const itemPropType = makeCheckerFromSchemas(itemSchema);
export const extendItemPropType = schema => makeCheckerFromSchemas(
  itemSchema, schema);

// List of Items

export const itemsPropType = PropTypes.arrayOf(itemPropType.isRequired);
export const extendItemsPropType = schema => PropTypes.arrayOf(
  extendItemPropType(schema).isRequired);

// Item UI

const itemUiSchema = {
  buttons: 'funcs',
  checkboxes: 'funcs',
};

export const itemUiPropType = makeCheckerFromSchemas(itemUiSchema);
export const itemUiDefaultProps = {
  ui: {
    buttons: [],
    checkboxes: [],
  },
};
