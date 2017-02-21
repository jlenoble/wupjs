import React, {PropTypes} from 'react';

const GlyphCheckbox = ({onChange, addClass, checked}) => (
  <span className="glyph-checkbox">
    <input
      type="checkbox"
      className={addClass}
      onChange={onChange}
      checked={checked}
    />
  </span>
);

GlyphCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  addClass: PropTypes.string,
  checked: PropTypes.bool,
};

export default GlyphCheckbox;
