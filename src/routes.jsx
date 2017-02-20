import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout';
import IndexPage from './components/index-page';
import TestPage from './components/list/card-list';
import PageNotFound from './components/page-not-found';

const routes = <Route path="/" component={Layout}>
  <IndexRoute component={IndexPage}/>
  <Route path="/test" component={TestPage}/>
  <Route path="*" component={PageNotFound}/>
</Route>;

export default routes;
