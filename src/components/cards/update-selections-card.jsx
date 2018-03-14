import CardFactory from './card-factory';
import {getMapOfAllSelections, getItemsFromSelectionMap} from './helpers';

export default CardFactory(
  {title: true, itemUi: {inlineRight: ['addSelection']}},
  {inlineRight: ['editSelection', 'deleteItem']},
  {_id: 'update-selections', title: 'Update selections', filter: state => {
    return getItemsFromSelectionMap(state, getMapOfAllSelections(state));
  }}
);
