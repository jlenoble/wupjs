import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphButton = ({glyphicon, onClick, addClass}) => (
  <button
    className={classnames('btn btn-secondary', addClass)}
    onClick={onClick}
  >
    <i className={`fa fa-${glyphicon}`}></i>
  </button>
);

GlyphButton.propTypes = {
  glyphicon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  addClass: PropTypes.string,
};

export default GlyphButton;
