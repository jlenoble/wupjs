import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../../actions';
import List from './list';
import ActionGlyphButton from '../container/action-glyph-button';
import {EditItemButton} from './item-buttons';
import {SelectItemCheckbox} from './item-checkboxes';

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
        <div className="card-block">
          {isFetching && items.length === 0 &&
            <h2>Loading...</h2>
          }
          {!isFetching && items.length === 0 &&
            <h2>Empty.</h2>
          }
          {items.length > 0 &&
            <List
              items={items}
              ui={{
                buttons: [EditItemButton],
                checkboxes: [SelectItemCheckbox],
              }}
            />
          }
        </div>
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

export default connect(mapStateToProps)(Card);
