import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import List from './list';

class Card extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return (
      <div className="card">
        <div className="card-header"></div>
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
  const items = props.items;
  const selections = state.selections.items;

  props.items = Object.keys(selections).map(_id => {
    return items[selections[_id].itemId];
  });

  return props;
}

export default connect(mapStateToProps)(Card);
