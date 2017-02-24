import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';

class Card extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return (
      <div className="card">
        <div className="card-header"></div>
        <CardBlock
          items={items}
          isFetching={isFetching}
        />
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
