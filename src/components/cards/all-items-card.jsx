import CardFactory from './card-factory';
import {getItemsFromItemMap} from './helpers';

export default CardFactory(
  {title: true, createItem: true},
  {inlineRight: ['editItem', 'deleteItem']},
  {_id: 'all-items', title: 'All items', filter: (state, itemMap) => {
    return getItemsFromItemMap(itemMap);
  }}
);
