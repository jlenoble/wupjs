import React, {PropTypes} from 'react';

const GlyphButtonGroup = ({children}) => (
  <div className="btn-group" role="group">
    {children}
  </div>
);

GlyphButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default GlyphButtonGroup;
