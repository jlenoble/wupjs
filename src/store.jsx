import React from 'react';
import AppRoutes from './components/app-routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const Store = () => <Provider store={store}>
  <AppRoutes/>
</Provider>;

export default Store;
