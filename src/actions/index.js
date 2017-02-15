let nextItemId = 0;

export const addItem = text => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    text,
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleItem = id => {
  return {
    type: 'TOGGLE_ITEM',
    id,
  };
};
