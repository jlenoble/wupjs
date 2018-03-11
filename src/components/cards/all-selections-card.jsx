import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllSelections, getItemsFromSelectionMap, updateEditedFlags}
  from './helpers';

const AllSelectionsCard = ({items, isFetching}) => {
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
        delete: true,
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
      AllSelectionsCard
    ),
  };
};

export default connect(mapStateToProps)(AllSelectionsCard);
