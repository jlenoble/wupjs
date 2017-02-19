import React, {PropTypes} from 'react';

const GlyphButton = ({glyphiconType}) => (
  <button className="btn btn-default">
    <span className={`glyphicon glyphicon-${glyphiconType}`}></span>
  </button>
);

GlyphButton.propTypes = {
  glyphiconType: PropTypes.string.isRequired,
};

export default GlyphButton;
