import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardHeader from './card-header';
import CardBlock from './card-block';
import {itemPropType, itemsPropType} from '../list/proptypes';
import {fetchItemsIfNeeded, fetchSelectionIfNeeded} from '../../actions';
import {dispatch} from '../../server/store';

class Card extends Component {
  componentDidMount () {
    const {selectionId} = this.props;

    if (selectionId) {
      dispatch(fetchSelectionIfNeeded(selectionId));
    } else {
      dispatch(fetchItemsIfNeeded());
    }
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
