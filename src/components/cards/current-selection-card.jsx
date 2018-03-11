import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getItemsFromItemMap, getCurrentSelectionMap, updateEditedFlags}
  from './helpers';

const CurrentSelectionCard = ({item, items, isFetching, headerUi}) => {
  return (
    <Card
      item={item}
      items={items}
      isFetching={isFetching}
      headerUi={headerUi}
      blockUi={{
        remove: true,
      }}
    />
  );
};

const mapStateToProps = state => {
  const currentSelection = state.currentSelection;

  let item = currentSelection.item;
  let headerUi;

  if (item) {
    headerUi = {
      title: true,
      save: true,
      itemUi: {
        edit: true,
      },
    };
  } else if (currentSelection.isBeingNamed) {
    headerUi = {
      name: true,
    };
  } else {
    headerUi = {
      create: true,
    };
  }

  return {
    isFetching: state.items.isFetching,
    items: updateEditedFlags(
      getItemsFromItemMap(getCurrentSelectionMap()),
      state.currentItem,
      CurrentSelectionCard
    ).map(item => ({...item, isSelected: true})),
    item,
    headerUi,
  };
};

export default connect(mapStateToProps)(CurrentSelectionCard);
