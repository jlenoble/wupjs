import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layouts/page';
import IndexPage from './components/pages/index-page';
import TestPage from './components/pages/test-page';
import ItemsPage from './components/pages/items-page';
import SelectionsPage from './components/pages/selections-page';
import SelectionCRUDPage from './components/pages/selection-crud-page';
import PageNotFound from './components/pages/page-not-found';

const routes = <Route path="/" component={Layout}>
  <IndexRoute component={IndexPage}/>
  <Route path="/test" component={TestPage}/>
  <Route path="/items" component={ItemsPage}/>
  <Route path="/selections" component={SelectionsPage}/>
  <Route path="/selection-crud" component={SelectionCRUDPage}/>
  <Route path="*" component={PageNotFound}/>
</Route>;

export default routes;
