import React from 'react';
import {connect} from 'react-redux';
import {newItem} from '../../actions';

let AddItem = ({dispatch}) => {
  let input;

  return <div>
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(newItem(input.value));
      input.value = '';
    }}>
      <input ref={node => {
        input = node;
      }}/>
      <button type="submit">
        Add Item
      </button>
    </form>
  </div>;
};

AddItem = connect()(AddItem);

export default AddItem;
