import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateItem, unfocusCurrentItem} from '../../actions';
import ActionGlyphInputGroup from '../container/action-glyph-input-group';

const ModifyItem = ({item, dispatch}) => {
  return (
    <ActionGlyphInputGroup
      glyphiconType="floppy-disk"
      autoFocus={true}
      handleSubmit={(input, clearInput, dispatch) => {
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
      }}
      defaultValue={item.title}
    />
  );
};

ModifyItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const item = state.currentItem;
  return {item};
};

export default connect(mapStateToProps)(ModifyItem);
