import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllItems, getItemsFromItemMap, itemIsEditedWithinCard}
  from './helpers';

const AllItemsCard = ({items, isFetching}) => {
  return (
    <Card
      item={{
        _id: 'all-items',
        title: 'All items',
      }}
      items={items}
      isFetching={isFetching}
      headerUi={{
        add: true,
        title: true,
      }}
      blockUi={{
        delete: true,
      }}
    />
  );
};

const mapStateToProps = state => {
  const items = getItemsFromItemMap(getMapOfAllItems());
  const currentItem = state.currentItem;

  return {
    isFetching: state.items.isFetching,
    items: items.map(item => Object.assign({
      isBeingEdited: itemIsEditedWithinCard(item, AllItemsCard, currentItem),
      cardName: AllItemsCard.name,
    }, item)),
  };
};

export default connect(mapStateToProps)(AllItemsCard);
