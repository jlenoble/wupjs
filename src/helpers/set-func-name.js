export const setFuncName = (Func, name) => {
  try {
    Object.defineProperty(Func, 'name', {value: name});
  } catch (e) {
    // Do nothing: recover if readonly property error raised
  }
};
