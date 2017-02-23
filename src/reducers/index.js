import {combineReducers} from 'redux';
import {items} from './items';
import {currentItem} from './current-item';
import {currentSelection} from './current-selection';
import {selections} from './selections';

const reducers = combineReducers({
  items,
  currentItem,
  currentSelection,
  selections,
});

export default reducers;
