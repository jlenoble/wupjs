import CardFactory from './card-factory';
import {getMapOfAllSelections, getItemsFromSelectionMap} from './helpers';

export default CardFactory(
  {title: true},
  {inlineRight: ['editItem', 'deleteItem']},
  {_id: 'all-selections', title: 'All selections', filter: () => {
    return getItemsFromSelectionMap(getMapOfAllSelections());
  }}
);
