import {combineReducers} from 'redux';
import {items} from './items';
import {currentItem} from './current-item';
import {currentSelection} from './current-selection';

const reducers = combineReducers({
  items,
  currentItem,
  currentSelection,
});

export default reducers;
