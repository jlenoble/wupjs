import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {GlyphInputText} from 'wupjs-glyph-input-text';

class ActionGlyphInputGroup extends Component {
  componentWillMount () {
    const {handleFocus, handleSubmit, dispatch} = this.props;

    if (handleFocus) {
      this._handleFocus = () => {
        handleFocus(dispatch);
      };
    }

    this._handleSubmit = e => {
      e.preventDefault();

      handleSubmit(this._inputNode, () => {
        this._inputNode.value = '';
      }, dispatch);
    };
  }

  render () {
    const {placeholder, glyphicon, autoFocus, defaultValue} = this.props;

    return (
      <GlyphInputText
        placeholder={placeholder}
        glyph={glyphicon}
        exposeInputNode={inputNode => {
          this._inputNode = inputNode;
        }}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
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
