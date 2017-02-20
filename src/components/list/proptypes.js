import {PropTypes} from 'react';

export const itemPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
});

export const itemsPropType = PropTypes.arrayOf(itemPropType.isRequired);
