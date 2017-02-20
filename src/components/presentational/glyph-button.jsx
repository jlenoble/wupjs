import React, {PropTypes} from 'react';

const GlyphButton = ({glyphiconType, onClick}) => (
  <button
    className="btn btn-default"
    onClick={onClick}
  >
    <span className={`glyphicon glyphicon-${glyphiconType}`}></span>
  </button>
);

GlyphButton.propTypes = {
  glyphiconType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GlyphButton;
