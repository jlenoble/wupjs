import React from 'react';
import AppRoutes from './components/app-routes';
import {Provider} from 'react-redux';
import store from './server/store';

const Store = () => <Provider store={store}>
  <AppRoutes/>
</Provider>;

export default Store;
