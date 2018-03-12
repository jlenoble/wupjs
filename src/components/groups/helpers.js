import {deleteItem, uiActions} from '../../actions';
import {dispatch} from '../../server/store';

const {selectItem, unselectItem, editItem, unfocusCurrentItem} = uiActions;

export const getGlyphs = ui => ui && ui.map(action => {
  switch (action) {
  case 'deleteItem':
    return 'trash-o';
  case 'editItem':
    return 'pencil';
  case 'removeItem':
    return 'close';
  case 'selectItem':
    return 'check';
  }
}) || [];

export const getActions = (ui, glyphs) => {
  const actions = {};

  ui && ui.forEach((action, i) => {
    switch (action) {
    case 'deleteItem':
      actions[glyphs[i]] = deleteItem;
      break;
    case 'editItem':
      actions[glyphs[i]] = editItem;
      break;
    case 'removeItem':
      actions[glyphs[i]] = unselectItem;
      break;
    case 'selectItem':
      actions[glyphs[i]] = selectItem;
      break;
    }
  });

  return actions;
};

export const getReverseActions = (ui, glyphs) => {
  const actions = {};

  ui && ui.forEach((action, i) => {
    switch (action) {
    case 'selectItem':
      actions[glyphs[i]] = unselectItem;
      break;
    }
  });

  return actions;
};

const buildCallbacks = getActions => (item, ui, glyphs) => {
  const actions = getActions(ui, glyphs);
  const implementations = {};

  glyphs.forEach(glyph => {
    let fn = actions[glyph];
    implementations[glyph] = () => {
      dispatch(unfocusCurrentItem());
      dispatch(fn(item));
    };
  });

  return implementations;
};

export const onClicks = buildCallbacks(getActions);
export const onChecks = onClicks;
export const onUnchecks = buildCallbacks(getReverseActions);

export const checked = (item, ui, glyphs) => {
  const bools = {};

  ui && ui.forEach((action, i) => {
    switch (action) {
    case 'selectItem':
      bools[glyphs[i]] = item.isSelected;
      break;
    }
  });

  return bools;
};
