import React, {PropTypes} from 'react';

const GlyphCheckbox = ({onChange, addClass, checked, exposeInputNode}) => (
  <span className="glyph-checkbox">
    <input
      type="checkbox"
      className={addClass}
      onChange={onChange}
      checked={checked}
      ref={node => {
        exposeInputNode(node);
      }}

    />
  </span>
);

GlyphCheckbox.propTypes = {
  exposeInputNode: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  addClass: PropTypes.string,
  checked: PropTypes.bool,
};

export default GlyphCheckbox;
