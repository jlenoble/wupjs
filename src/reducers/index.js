import {combineReducers} from 'redux';
import items from './items';
import visibilityFilter from './visibility-filter';

const reducers = combineReducers({
  items,
  visibilityFilter,
});

export default reducers;
