import React, {Component, PropTypes} from 'react';
import {EditItemButton, RemoveItemButton} from './item-buttons';
import ModifyItem from './modify-item';
import {updateItem, unfocusCurrentItem} from '../../actions';

class Item extends Component {
  renderEdited () {
    const {title, _id} = this.props;

    return <li className="list-group-item">
      <ModifyItem
        title={title}
        save={(input, clearInput, dispatch) => {
          dispatch(unfocusCurrentItem());

          const trimmedValue = input.value.trim();

          if (!trimmedValue || trimmedValue === title) {
            return;
          }

          dispatch(updateItem({title: trimmedValue, _id}, {title, _id}));

          clearInput();
        }}
      />
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
};

export default Item;
