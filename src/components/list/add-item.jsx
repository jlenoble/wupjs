import React from 'react';
import {connect} from 'react-redux';
import {newItem, unfocusCurrentItem} from '../../actions';

let AddItem = ({dispatch}) => {
  let input;

  return <div>
    <form
      className="input-group"
      onFocus={() => {
        dispatch(unfocusCurrentItem());
      }}
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(newItem(input.value));
        input.value = '';
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Enter an item"
        ref={node => {
          input = node;
        }}
      />
      <span className="input-group-btn">
        <button
          type="submit"
          className="btn btn-default"
        >
          Add Item
        </button>
      </span>
    </form>
  </div>;
};

AddItem = connect()(AddItem);

export default AddItem;
