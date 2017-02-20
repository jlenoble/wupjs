import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {newItem, updateItem, unfocusCurrentItem} from '../../actions';
import ActionGlyphInputGroup from '../container/action-glyph-input-group';

const makeItemInputGroup = ({
  glyphicon, autoFocus, placeholder, handleFocus, makeHandleSubmit,
}) => {
  const ItemInputGroup = ({item = {}, dispatch}) => {
    return (
      <ActionGlyphInputGroup
        glyphicon={glyphicon}
        autoFocus={autoFocus}
        placeholder={placeholder}
        handleFocus={handleFocus}
        handleSubmit={makeHandleSubmit(item)}
        defaultValue={item.title}
      />
    );
  };

  ItemInputGroup.propTypes = {
    item: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => {
    const item = state.currentItem;
    return {item};
  };

  return connect(mapStateToProps)(ItemInputGroup);
};

export default makeItemInputGroup;

const ModifyItemInputGroup = makeItemInputGroup({
  glyphicon: 'save',
  autoFocus: true,
  makeHandleSubmit: item => (input, clearInput, dispatch) => {
    const trimmed = input.value.trim();
    if (!trimmed) {
      return;
    }
    dispatch(updateItem({
      title: trimmed,
      _id: item._id,
    }, item));
    clearInput();
    dispatch(unfocusCurrentItem());
  },
});

const AddItemInputGroup = makeItemInputGroup({
  glyphicon: 'plus',
  placeholder: 'Enter an item',
  handleFocus: dispatch => dispatch(unfocusCurrentItem()),
  makeHandleSubmit: () => (input, clearInput, dispatch) => {
    if (!input.value.trim()) {
      return;
    }
    dispatch(newItem(input.value));
    clearInput();
  },
});

export {AddItemInputGroup, ModifyItemInputGroup};
