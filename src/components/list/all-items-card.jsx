import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import List from './list';
import {AddItemInputGroup} from './item-input-groups';

class Card extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <AddItemInputGroup/>
        </div>
        <div className="card-block">
          {isFetching && items.length === 0 &&
            <h2>Loading...</h2>
          }
          {!isFetching && items.length === 0 &&
            <h2>Empty.</h2>
          }
          {items.length > 0 &&
            <List items={items}/>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps (state) {
  const props = Object.assign({}, state.items);

  const {_id, isBeingEdited} = state.currentItem;
  const selection = state.currentSelection.items;

  if (isBeingEdited) {
    props.items = props.items.map(item => {
      return item._id !== _id ? item : Object.assign({
        isBeingEdited,
      }, item);
    });
  }

  props.items = props.items.map(item => {
    return Object.assign({}, item, {
      isSelected: selection[item._id] ? true : false,
    });
  });

  return props;
}

export default connect(mapStateToProps)(Card);
