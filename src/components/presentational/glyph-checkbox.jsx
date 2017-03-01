import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphCheckbox = ({onChange, addClass, glyphicon, checked,
  exposeInputNode, itemId}) => {
  const name= glyphicon + itemId;

  return (
    <span className="glyph-checkbox">
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        ref={node => {
          exposeInputNode(node);
        }}
      />
      <label
        htmlFor={name}
        className={classnames('fa fa-' + glyphicon, addClass)}
      ></label>
    </span>
  );
};

GlyphCheckbox.propTypes = {
  exposeInputNode: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  addClass: PropTypes.string,
  checked: PropTypes.bool,
};

export default GlyphCheckbox;
