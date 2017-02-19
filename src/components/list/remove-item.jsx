import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphButton from '../presentational/glyph-button';

class RemoveItem extends Component {
  componentWillMount () {
    this.doDelete = () => {
      this.props.doDelete(this.props.dispatch);
    };
  }

  render () {
    return (
      <span onClick={this.doDelete}>
        <GlyphButton glyphiconType="trash"/>
      </span>
    );
  }
}

RemoveItem.propTypes = {
  doDelete: PropTypes.func.isRequired,
};

export default connect()(RemoveItem);
