import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllSelections, getItemsFromSelectionMap, updateEditedFlags}
  from './helpers';

const OpenSelectionsCard = ({items, isFetching}) => {
  return (
    <Card
      item={{
        _id: 'all-selections',
        title: 'All selections',
      }}
      items={items}
      isFetching={isFetching}
      headerUi={{
        title: true,
      }}
      blockUi={{
        update: true,
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.items.isFetching,
    items: updateEditedFlags(
      getItemsFromSelectionMap(getMapOfAllSelections()),
      state.currentItem,
      OpenSelectionsCard
    ),
  };
};

export default connect(mapStateToProps)(OpenSelectionsCard);
