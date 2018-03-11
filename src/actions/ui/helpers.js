import camelize from 'camelize';

export const uiActions = {};

export const addAction = MESSAGE => {
  Object.assign(uiActions, {
    [MESSAGE]: MESSAGE,
    [camelize(MESSAGE.toLowerCase())]: function (item) {
      return dispatch => {
        dispatch({
          type: MESSAGE,
          item,
        });
      };
    },
  });
};
