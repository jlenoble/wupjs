export const setFuncName = (Func, name) => {
  Object.defineProperty(Func, 'name', {value: name});
};
