import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GlyphButton from '../presentational/glyph-button';

class EditItem extends Component {
  componentWillMount () {
    this.edit = () => {
      this.props.edit(this.props.dispatch);
    };
  }

  render () {
    return (
      <span onClick={this.edit}>
        <GlyphButton glyphiconType="pencil"/>
      </span>
    );
  }
}

EditItem.propTypes = {
  edit: PropTypes.func.isRequired,
};

export default connect()(EditItem);
