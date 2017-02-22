import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphCheckbox from '../presentational/glyph-checkbox';

class ActionGlyphCheckbox extends Component {
  componentWillMount () {
    this._handleChange = () => {
      this.props.handleChange(this.props.dispatch);
    };
  }

  render () {
    return (
      <GlyphCheckbox
        addClass={this.props.addClass}
        onChange={this._handleChange}
        checked={this.props.checked}
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
