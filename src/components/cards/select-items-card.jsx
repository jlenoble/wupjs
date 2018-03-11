import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllItems, getItemsFromItemMap, getCurrentSelectionMap,
  updateEditedFlags} from './helpers';

const SelectItemsCard = ({items, isFetching}) => {
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
        select: true,
        delete: true,
      }}
    />
  );
};

const mapStateToProps = state => {
  const selectionMap = getCurrentSelectionMap();

  return {
    isFetching: state.items.isFetching,
    items: updateEditedFlags(
      getItemsFromItemMap(getMapOfAllItems()),
      state.currentItem,
      SelectItemsCard
    ).map(item => ({...item, isSelected: !!selectionMap[item._id]})),
  };
};

export default connect(mapStateToProps)(SelectItemsCard);
