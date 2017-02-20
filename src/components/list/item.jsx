import React, {Component, PropTypes} from 'react';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import {ModifyItemInputGroup} from './item-input-groups';
import GlyphButtonGroup from '../presentational/glyph-button-group';

class Item extends Component {
  renderEdited () {
    const {title, _id} = this.props;

    return <li className="list-group-item">
      <ModifyItemInputGroup item={{title, _id}}/>
    </li>;
  }

  renderViewed () {
    const {title, _id} = this.props;

    return <li className="list-group-item">
      <span>
        {title}
      </span>

      <GlyphButtonGroup>
        <EditItemButton item={{title, _id}}/>
        <RemoveItemButton item={{title, _id}}/>
      </GlyphButtonGroup>
    </li>;
  }

  render () {
    const {isBeingEdited} = this.props;

    return isBeingEdited ? this.renderEdited() : this.renderViewed();
  }
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // isBeingEdited: PropTypes.bool.isRequired,
};

export default Item;
