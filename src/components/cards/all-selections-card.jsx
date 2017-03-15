import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getMapOfAllSelections, getItemsFromSelectionMap} from './helpers';

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
    items: getItemsFromSelectionMap(getMapOfAllSelections()),
  };
};

export default connect(mapStateToProps)(AllSelectionsCard);
