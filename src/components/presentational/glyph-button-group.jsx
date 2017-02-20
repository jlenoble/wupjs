import classnames from 'classnames';
import React, {PropTypes} from 'react';

const GlyphButtonGroup = ({children, addClass}) => (
  <div className={classnames('btn-group', addClass)} role="group">
    {children}
  </div>
);

GlyphButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default GlyphButtonGroup;
