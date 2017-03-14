import React, {Component, PropTypes} from 'react';
import CardHeader from './card-header';
import CardBlock from './card-block';
import {itemPropType, itemsPropType} from '../list/proptypes';
import {fetchItemsIfNeeded, fetchSelectionsIfNeeded} from '../../actions';
import {dispatch} from '../../server/store';

class Card extends Component {
  componentDidMount () {
    dispatch(fetchItemsIfNeeded());
    dispatch(fetchSelectionsIfNeeded());
  }

  render () {
    const {item, items, isFetching, headerUi, blockUi} = this.props;

    return (
      <div className="card">
        <CardHeader
          item={item}
          ui={headerUi}
        />
        <CardBlock
          items={items}
          isFetching={isFetching}
          ui={blockUi}
        />
      </div>
    );
  }
}

Card.propTypes = {
  items: itemsPropType.isRequired,
  item: itemPropType,
  isFetching: PropTypes.bool,
  headerUi: PropTypes.object,
  blockUi: PropTypes.object,
};

Card.defaultProps = {
  isFetching: false,
  headerUi: {},
  blockUi: {},
};

export default Card;

export const itemIsEditedWithinCard = (item, card, {
  _id, isBeingEdited, cardName}) => {
  return isBeingEdited && item._id === _id && card.name === cardName;
};
