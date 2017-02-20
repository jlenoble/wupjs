import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphButton from '../presentational/glyph-button';

class ActionGlyphButton extends Component {
  componentWillMount () {
    this._handleClick = () => {
      this.props.handleClick(this.props.dispatch);
    };
  }

  render () {
    return (
      <GlyphButton
        glyphiconType={this.props.glyphiconType}
        onClick={this._handleClick}
      />
    );
  }
}

ActionGlyphButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  glyphiconType: PropTypes.string.isRequired,
};

export default connect()(ActionGlyphButton);
