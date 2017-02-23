import {unfocusCurrentItem} from '../actions' ;

export const makeHandleChange = (doSomething, undoSomething) => obj => (
  input, dispatch) => {
  dispatch(unfocusCurrentItem());

  if (input.checked) {
    dispatch(doSomething(obj));
  } else {
    dispatch(undoSomething(obj));
  }
};
