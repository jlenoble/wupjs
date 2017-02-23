import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphCheckbox from '../presentational/glyph-checkbox';

class ActionGlyphCheckbox extends Component {
  componentWillMount () {
    const {handleChange, dispatch} = this.props;

    this._handleChange = () => {
      handleChange(this._inputNode, dispatch);
    };
  }

  render () {
    const {addClass, glyphicon, checked} = this.props;

    return (
      <GlyphCheckbox
        glyphicon={glyphicon}
        addClass={addClass}
        exposeInputNode={inputNode => {
          this._inputNode = inputNode;
        }}
        onChange={this._handleChange}
        checked={checked}
      />
    );
  }
}

ActionGlyphCheckbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  glyphicon: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  checked: PropTypes.bool,
};

export default connect()(ActionGlyphCheckbox);
