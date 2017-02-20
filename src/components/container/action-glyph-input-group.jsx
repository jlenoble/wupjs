import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphInputGroup from '../presentational/glyph-input-group';

class ActionGlyphInputGroup extends Component {
  componentWillMount () {
    if (this.props.handleFocus) {
      this._handleFocus = () => {
        this.props.handleFocus(this.props.dispatch);
      };
    }

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
        glyphicon={this.props.glyphicon}
        exposeInputNode={inputNode => {
          this._inputNode = inputNode;
        }}
        autoFocus={this.props.autoFocus}
        defaultValue={this.props.defaultValue}
        onFocus={this._handleFocus}
        onSubmit={this._handleSubmit}
      />
    );
  }
}

ActionGlyphInputGroup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  glyphicon: PropTypes.string.isRequired,
  handleFocus: PropTypes.func,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default connect()(ActionGlyphInputGroup);
