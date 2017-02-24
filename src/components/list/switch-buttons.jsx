import React, {PropTypes} from 'react';
import ActionGlyphCheckbox from '../container/action-glyph-checkbox';
import {unfocusCurrentItem} from '../../actions';
import {setFuncName} from '../../helpers';

const makeSwitchButton = (applyToItem, glyphicon) => {
  const SwitchButton = ({addClass}) => (
    <button className="btn btn-secondary">
      <ActionGlyphCheckbox
        handleChange={dispatch => {
          dispatch(unfocusCurrentItem());
          dispatch(applyToItem());
        }}
        glyphicon={glyphicon}
        addClass={addClass}
      />
    </button>
  );

  SwitchButton.propTypes = {
    addClass: PropTypes.string,
  };

  return SwitchButton;
};

export default makeSwitchButton;

const EditSwitchButton = makeSwitchButton(()=>{}, 'pencil');
const SelectSwitchButton = makeSwitchButton(()=>{}, 'check');
const DeleteSwitchButton = makeSwitchButton(()=>{}, 'trash-o');
const ScheduleSwitchButton = makeSwitchButton(()=>{}, 'clock-o');

setFuncName(EditSwitchButton, 'EditSwitchButton');
setFuncName(SelectSwitchButton, 'SelectSwitchButton');
setFuncName(DeleteSwitchButton, 'DeleteSwitchButton');
setFuncName(ScheduleSwitchButton, 'ScheduleSwitchButton');

export {
  EditSwitchButton, SelectSwitchButton, DeleteSwitchButton,
  ScheduleSwitchButton,
};
