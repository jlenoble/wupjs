import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllItems, getItemsFromItemMap, updateEditedFlags}
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
  return {
    isFetching: state.items.isFetching,
    items: updateEditedFlags(
      getItemsFromItemMap(getMapOfAllItems()),
      state.currentItem,
      AllItemsCard
    ),
  };
};

export default connect(mapStateToProps)(AllItemsCard);
