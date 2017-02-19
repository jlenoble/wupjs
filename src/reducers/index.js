import {combineReducers} from 'redux';
import {items} from './items';
import {currentItem} from './current-item';

const reducers = combineReducers({
  items,
  currentItem,
});

export default reducers;
