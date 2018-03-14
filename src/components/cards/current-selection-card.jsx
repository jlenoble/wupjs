import React, {Component} from 'react';
import CardFactory from './card-factory';
import {connect} from 'react-redux';
import {getCurrentSelectionMap, getItemsFromItemMap} from './helpers';

const blockUi = {inlineRight: ['editItem', 'removeItem']};
const options = {
  _id: 'current-selection',
  title: 'Current selection',
  filter: state => {
    return getItemsFromItemMap(getCurrentSelectionMap(state))
      .map(item => ({...item, isSelected: true}));
  },
};

/*
Logic flow:
  Creation
  C1 Card is new, currentSelection is unnamed, empty, unsaved
  C2 An elt is added: cS must be named, Card is namable, extensible, unsavable
  C3 other elts added: C2
  C4 Card is being named: any blur returns to C2
  C5 cS is named and autosaved: C1
  Update
  U1 = C1
  U2 A selection is recalled: Card is renamable, extensible, unsavable
  U3 Elements are changed: Card is renamable, extensible, savable
  U4 Selection is renamed: U2 or U3, depending on changes already
  U5 cS is Saved: C1
*/

// C1
const NewCard = CardFactory(
  {title: true},
  blockUi, options
);

// C2
const CreateCard = CardFactory(
  {createSelection: true},
  blockUi, options
);

// C4
const NameCard = CardFactory(
  {nameSelection: true},
  blockUi, options
);

// U2
const UnmodifiedCard = CardFactory(
  {title: true, itemUi: {inlineRight: ['editItem']}},
  blockUi, options
);

// U3
const ModifiedCard = CardFactory(
  {title: true, itemUi: {inlineRight: ['editItem', 'updateSelection']}},
  blockUi, options
);

class CurrentSelectionCard extends Component {
  render () {
    const {Card, selectionId} = this.props;
    return <Card selectionId={selectionId}/>;
  }
}

const mapStateToProps = (state, props) => {
  const {currentSelection} = state;
  const {item, items, selectionId, isBeingNamed, isBeingUpdated, itemsChanged} =
    currentSelection;
  let Card;

  if (!item) {
    if (Object.keys(items).length === 0) { // C1
      Card = NewCard;
    } else if (isBeingNamed) { // C4
      Card = NameCard;
    } else { // C2, C3
      Card = CreateCard;
    }
  } else if (isBeingUpdated) {
    if (itemsChanged) { // U3
      Card = ModifiedCard;
    } else { // U2
      Card = UnmodifiedCard;
    }
  } else { // C5
    Card = NewCard;
  }

  return {Card, selectionId};
};

export default connect(mapStateToProps)(CurrentSelectionCard);
