import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import CardBlock from './card-block';
import ActionGlyphButton from '../container/action-glyph-button';
import {EditItemButton, UnselectItemButton} from './item-buttons';

class Card extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <ActionGlyphButton
            glyphicon="save"
            handleClick={dispatch => {
            }}
          />
        </div>
        <CardBlock
          items={items}
          isFetching={isFetching}
          ui={{
            buttons: [EditItemButton, UnselectItemButton],
            checkboxes: [],
          }}
        />
      </div>
    );
  }
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps (state) {
  const props = Object.assign({}, state.items);
  const items = props.items;
  const selection = state.currentSelection.items;

  props.items = Object.keys(items).filter(_id => {
    return selection[_id];
  }).map(_id => Object.assign({
    isSelected: true,
  }, items[_id]));

  return props;
}

export const CurrentSelectionCard = connect(mapStateToProps)(Card);

import {default as AllItemsCard} from './all-items-card';
import {default as AllSelectionsCard} from './all-selections-card';

export {AllItemsCard, AllSelectionsCard};
