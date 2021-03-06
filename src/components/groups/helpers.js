import {deleteItem, updateSelection, uiActions} from '../../actions';
import {dispatch} from '../../server/store';

const {
  addSelection,
  closeSelection,
  editItem,
  editSelection,
  selectItem,
  startNamingSelection,
  unfocusCurrentItem,
  unselectItem,
} = uiActions;

export const getGlyphs = ui => ui && ui.map(action => {
  switch (action) {
  case 'addSelection':
    return 'plus';
  case 'closeSelection':
    return 'close';
  case 'createSelection':
    return 'save';
  case 'deleteItem':
    return 'trash-o';
  case 'editItem':
    return 'pencil';
  case 'editSelection':
    return 'pencil';
  case 'removeItem':
    return 'close';
  case 'selectItem':
    return 'check';
  case 'updateSelection':
    return 'save';
  }
}) || [];

export const getActions = (ui, glyphs) => {
  const actions = {};

  ui && ui.forEach((action, i) => {
    switch (action) {
    case 'addSelection':
      actions[glyphs[i]] = addSelection;
      break;
    case 'closeSelection':
      actions[glyphs[i]] = closeSelection;
      break;
    case 'createSelection':
      actions[glyphs[i]] = startNamingSelection;
      break;
    case 'deleteItem':
      actions[glyphs[i]] = deleteItem;
      break;
    case 'editItem':
      actions[glyphs[i]] = editItem;
      break;
    case 'editSelection':
      actions[glyphs[i]] = editSelection;
      break;
    case 'removeItem':
      actions[glyphs[i]] = unselectItem;
      break;
    case 'selectItem':
      actions[glyphs[i]] = selectItem;
      break;
    case 'updateSelection':
      actions[glyphs[i]] = updateSelection;
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
