import React, {PropTypes} from 'react';

const GlyphInputGroup = ({
  glyphicon, placeholder, autoFocus, defaultValue,
  exposeInputNode, onFocus, onSubmit,
}) => (
  <form
    className="input-group"
    onFocus={onFocus}
    onSubmit={onSubmit}
  >
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      ref={node => {
        exposeInputNode(node);
      }}
    />
    <span className="input-group-btn">
      <button
        type="submit"
        className="btn btn-secondary"
      >
        <i className={`fa fa-${glyphicon}`}></i>
      </button>
    </span>
  </form>
);

GlyphInputGroup.propTypes = {
  glyphicon: PropTypes.string.isRequired,
  exposeInputNode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default GlyphInputGroup;
