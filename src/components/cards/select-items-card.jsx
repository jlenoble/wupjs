import CardFactory from './card-factory';
import {getItemsFromItemMap, getCurrentSelectionMap} from './helpers';

export default CardFactory(
  {title: true, createItem: true},
  {inlineLeft: ['selectItem'], inlineRight: ['editItem', 'deleteItem']},
  {_id: 'select-items', title: 'Select items', filter: (state, itemMap) => {
    const currentSelection = getCurrentSelectionMap(state);
    return getItemsFromItemMap(itemMap).map(item => ({...item,
      isSelected: !!currentSelection[item._id]}));
  }},
);
