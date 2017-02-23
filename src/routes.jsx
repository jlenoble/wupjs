import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layouts/main';
import IndexPage from './components/pages/index-page';
import TestPage from './components/pages/test-page';
import PageNotFound from './components/pages/page-not-found';

const routes = <Route path="/" component={Layout}>
  <IndexRoute component={IndexPage}/>
  <Route path="/test" component={TestPage}/>
  <Route path="*" component={PageNotFound}/>
</Route>;

export default routes;
