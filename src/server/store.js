import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger();

export default createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);
