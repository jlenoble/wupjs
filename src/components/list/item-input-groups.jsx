import React from 'react';
import {connect} from 'react-redux';
import {newItem, updateItem, unfocusCurrentItem, displaySelectionName,
  stopNamingSelection, newSelection} from '../../actions';
import {GlyphInputText} from 'wupjs-glyph-input-text';
import {itemPropType} from './proptypes';
import {setFuncName} from '../../helpers';
import {dispatch} from '../../server/store';

const makeItemInputGroup = ({
  glyphicon, autoFocus, autoClear, placeholder, handleFocus, handleSubmit,
}) => {
  const ItemInputGroup = ({item = {}}) => {
    let inputNode;
    return (
      <GlyphInputText
        placeholder={placeholder}
        glyph={glyphicon}
        exposeInputNode={node => {
          inputNode = node;
        }}
        autoFocus={autoFocus}
        autoClear={autoClear}
        defaultValue={item.title}
        onFocus={handleFocus && (() => handleFocus(dispatch))}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(inputNode, item);
        }}
      />
    );
  };

  ItemInputGroup.propTypes = {
    item: itemPropType.isRequired,
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
  handleSubmit: (input, item) => {
    const trimmed = input.value.trim();
    if (!trimmed) {
      return;
    }
    dispatch(updateItem({
      title: trimmed,
      _id: item._id,
    }, item));
    dispatch(unfocusCurrentItem());
  },
});

const AddItemInputGroup = makeItemInputGroup({
  glyphicon: 'plus',
  placeholder: 'Enter an item',
  autoClear: true,
  handleFocus: dispatch => dispatch(unfocusCurrentItem()),
  handleSubmit: (input, item) => {
    if (!input.value.trim()) {
      return;
    }
    dispatch(newItem(input.value));
  },
});

const NameSelectionInputGroup = makeItemInputGroup({
  glyphicon: 'save',
  placeholder: 'Enter a name',
  autoFocus: true,
  handleFocus: dispatch => dispatch(unfocusCurrentItem()),
  handleSubmit: (input, item) => {
    if (!input.value.trim()) {
      return;
    }
    dispatch(newItem(input.value))
      .then(
        item => dispatch(displaySelectionName(item)),
        () => dispatch(stopNamingSelection())
      )
      .then(
        ({item}) => dispatch(newSelection(item))
      );
  },
});

setFuncName(AddItemInputGroup, 'AddItemInputGroup');
setFuncName(ModifyItemInputGroup, 'ModifyItemInputGroup');
setFuncName(NameSelectionInputGroup, 'NameSelectionInputGroup');

export {AddItemInputGroup, ModifyItemInputGroup, NameSelectionInputGroup};
