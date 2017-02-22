import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphCheckbox from '../presentational/glyph-checkbox';

class ActionGlyphCheckbox extends Component {
  componentWillMount () {
    const {handleChange, dispatch} = this.props;

    this._handleChange = () => {
      handleChange(dispatch);
    };
  }

  render () {
    const {addClass, checked} = this.props;

    return (
      <GlyphCheckbox
        addClass={addClass}
        onChange={this._handleChange}
        checked={checked}
      />
    );
  }
}

ActionGlyphCheckbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addClass: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default connect()(ActionGlyphCheckbox);
