import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {getItemsFromItemMap, getCurrentSelectionMap, itemIsEditedWithinCard}
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
  const items = getItemsFromItemMap(getCurrentSelectionMap());
  const currentSelection = state.currentSelection;
  const currentItem = state.currentItem;

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
    items: items.map(item => Object.assign({
      isBeingEdited: itemIsEditedWithinCard(item, CurrentSelectionCard,
        currentItem),
      isSelected: true,
      cardName: CurrentSelectionCard.name,
    }, item)),
    item, headerUi,
  };
};

export default connect(mapStateToProps)(CurrentSelectionCard);
