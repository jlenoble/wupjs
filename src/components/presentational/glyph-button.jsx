import React, {PropTypes} from 'react';

const GlyphButton = ({glyphicon, onClick}) => (
  <button
    className="btn btn-secondary"
    onClick={onClick}
  >
    <i className={`fa fa-${glyphicon}`}></i>
  </button>
);

GlyphButton.propTypes = {
  glyphicon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GlyphButton;
