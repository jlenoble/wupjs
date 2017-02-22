import {PropTypes} from 'react';

const requiredPropTypes = {
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export const itemPropType = PropTypes.shape(requiredPropTypes);
export const itemsPropType = PropTypes.arrayOf(itemPropType.isRequired);

export const itemWithRequiredProps = props => {
  const _props = Object.assign({}, requiredPropTypes);
  Object.keys(props).forEach(key => {
    _props[key] = PropTypes[props[key]].isRequired;
  });
  return PropTypes.shape(_props);
};

export const itemsWithRequiredProps = props => {
  return PropTypes.arrayOf(itemWithRequiredProps(props).isRequired);
};
