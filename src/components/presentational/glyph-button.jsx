import React, {PropTypes} from 'react';

const GlyphButton = ({glyphicon, onClick}) => (
  <button
    className="btn btn-default"
    onClick={onClick}
  >
    <span className={`glyphicon glyphicon-${glyphicon}`}></span>
  </button>
);

GlyphButton.propTypes = {
  glyphicon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GlyphButton;
