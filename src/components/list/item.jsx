import React, {Component, PropTypes} from 'react';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import ModifyItem from './modify-item';

class Item extends Component {
  renderEdited () {
    const {title, _id} = this.props;

    return <li className="list-group-item">
      <ModifyItem item={{title, _id}}/>
    </li>;
  }

  renderViewed () {
    const {title, _id} = this.props;

    return <li className="list-group-item">
      <span>
        {title}
      </span>

      <span className="pull-right">
        <EditItemButton item={{title, _id}}/>
        <RemoveItemButton item={{title, _id}}/>
      </span>
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
