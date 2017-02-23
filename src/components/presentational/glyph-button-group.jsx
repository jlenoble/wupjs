import classnames from 'classnames';
import React, {PropTypes} from 'react';

const GlyphButtonGroup = ({children, addClass}) => (
  <div className={classnames('btn-group', addClass)} role="group">
    {children}
  </div>
);

GlyphButtonGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  ]).isRequired,
  addClass: PropTypes.string,
};

export default GlyphButtonGroup;
