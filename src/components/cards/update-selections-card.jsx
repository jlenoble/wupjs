import React, {Component} from 'react';
import CardFactory from './card-factory';
import {connect} from 'react-redux';
import {getMapOfAllSelections, getItemsFromSelectionMap} from './helpers';

const SelectionsCard = CardFactory(
  {title: true, itemUi: {inlineRight: ['addSelection']}},
  {inlineRight: ['editSelection', 'deleteItem']},
  {_id: 'update-selections', title: 'Selections', filter: state => {
    return getItemsFromSelectionMap(state, getMapOfAllSelections(state));
  }}
);

class UpdateSelectionsCard extends Component {
  render () {
    const {Card} = this.props;
    return Card ? <Card/> : <span/>;
  }
}

const mapStateToProps = (state, props) => {
  const hasElements = Object.keys(state.selections.items).length > 0;
  const Card = hasElements ? SelectionsCard : undefined;

  return {Card};
};

export default connect(mapStateToProps)(UpdateSelectionsCard);
