import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphInputGroup from '../presentational/glyph-input-group';

class ActionGlyphInputGroup extends Component {
  componentWillMount () {
    this._handleFocus = () => {
      this.props.handleFocus(this.props.dispatch);
    };

    this._handleSubmit = e => {
      e.preventDefault();

      this.props.handleSubmit(this._inputNode, () => {
        this._inputNode.value = '';
      }, this.props.dispatch);
    };
  }

  render () {
    return (
      <GlyphInputGroup
        placeholder={this.props.placeholder}
        glyphiconType={this.props.glyphiconType}
        exposeInputNode={inputNode => {
          this._inputNode = inputNode;
        }}
        onFocus={this._handleFocus}
        onSubmit={this._handleSubmit}
      />
    );
  }
}

ActionGlyphInputGroup.propTypes = {
  handleFocus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  glyphiconType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default connect()(ActionGlyphInputGroup);
