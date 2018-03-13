import React from 'react';
import Card from './card';
import {connect} from 'react-redux';
import {updateEditedFlags} from './helpers';

const CardFactory = (headerUi, blockUi, options = {}) => {
  const GenericCard = ({
    selectionId, item, items, isFetching}) => {
    return (
      <Card
        selectionId={selectionId}
        item={item}
        items={items}
        isFetching={isFetching}
        headerUi={headerUi}
        blockUi={blockUi}
      />
    );
  };

  const mapStateToProps = (state, props) => {
    let selectionId = props.selectionId;
    let items = state.items.items;
    let item;
    let isFetching;

    if (selectionId) {
      const selections = state.selections.items;
      const selection = selections[selectionId];
      item = items[selection.itemId];
      items = options.filter(selection);
      isFetching = selections.isFetching;
    } else {
      item = {_id: options._id, title: options.title};
      items = options.filter(items);
      isFetching = items.isFetching;
    }

    items = updateEditedFlags(items, state.currentItem, selectionId ||
       item._id);

    return {selectionId, item, items, isFetching};
  };

  return connect(mapStateToProps)(GenericCard);
};

export default CardFactory;