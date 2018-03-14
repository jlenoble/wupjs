import camelize from 'camelize';

export const uiActions = {};

export const addAction = (MESSAGE, itemArg) => {
  Object.assign(uiActions, {
    [MESSAGE]: MESSAGE,
    [camelize(MESSAGE.toLowerCase())]: Array.isArray(itemArg)
      ? function (item) {
        const _item = {};

        itemArg.forEach(key => {
          _item[key] = item[key];
        });

        return dispatch => {
          dispatch({
            type: MESSAGE,
            ..._item,
          });
        };
      }
      : typeof itemArg === 'function'
        ? function (item) {
          return (dispatch, getState) => {
            dispatch({
              type: MESSAGE,
              ...itemArg(item, getState()),
            });
          };
        }
        : function (item) {
          return dispatch => {
            dispatch({
              type: MESSAGE,
              item,
            });
          };
        },
  });
};
