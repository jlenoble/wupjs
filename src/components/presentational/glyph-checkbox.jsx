import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphCheckbox = ({onChange, addClass, glyphicon, checked,
  exposeInputNode}) => (
  <span className="glyph-checkbox">
    <input
      type="checkbox"
      className={classnames('fa fa-' + glyphicon, addClass)}
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
