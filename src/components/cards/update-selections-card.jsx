import CardFactory from './card-factory';
import {getMapOfAllSelections, getItemsFromSelectionMap} from './helpers';

export default CardFactory(
  {title: true},
  {inlineRight: ['editSelection', 'deleteItem']},
  {_id: 'update-selections', title: 'Update selections', filter: state => {
    return getItemsFromSelectionMap(state, getMapOfAllSelections(state))
      .map(item => ({...item, state}));
  }}
);
