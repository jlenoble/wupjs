import React, {PropTypes} from 'react';

const GlyphInputGroup = ({glyphiconType, placeholder, exposeInputNode}) => (
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      ref={node => {
        exposeInputNode(node);
      }}
    />
    <span className="input-group-btn">
      <button
        type="submit"
        className="btn btn-default"
      >
        <span className={`glyphicon glyphicon-${glyphiconType}`}></span>
      </button>
    </span>
  </div>
);

GlyphInputGroup.propTypes = {
  glyphiconType: PropTypes.string.isRequired,
  exposeInputNode: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default GlyphInputGroup;
