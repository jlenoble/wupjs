import React from 'react';
import {connect} from 'react-redux';
import {newItem, unfocusCurrentItem} from '../../actions';
import ActionGlyphInputGroup from '../container/action-glyph-input-group';

let AddItem = ({dispatch}) => {
  return (
    <ActionGlyphInputGroup
      placeholder="Enter an item"
      glyphiconType="plus"
      handleFocus={dispatch => {
        dispatch(unfocusCurrentItem());
      }}
      handleSubmit={(input, clearInput, dispatch) => {
        if (!input.value.trim()) {
          return;
        }
        dispatch(newItem(input.value));
        clearInput();
      }}
    />
  );
};

AddItem = connect()(AddItem);

export default AddItem;
