import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import {items} from './items';
import {currentItem} from './current-item';
import {currentSelection} from './current-selection';
import {selections} from './selections';
import {syncSelections} from './sync-selections';

export default reduceReducers(
  combineReducers({
    items,
    currentItem,
    currentSelection,
    selections,
  }),
  syncSelections
);
