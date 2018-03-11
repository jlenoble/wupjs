import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import collectionReducers from './collections';
import {currentItem} from './current-item';
import {currentSelection} from './current-selection';
import {syncCurrentSelection} from './sync-current-selection';

export default reduceReducers(
  combineReducers({currentItem, currentSelection, ...collectionReducers}),
  syncCurrentSelection
);
