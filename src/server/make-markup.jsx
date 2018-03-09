import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext} from 'react-router';
import {Provider} from 'react-redux';

import PageNotFound from '../components/pages/page-not-found';
import store from './store';

export default function makeMarkup (renderProps) {
  let markup;
  if (renderProps) {
    markup = renderToString(<Provider store={store}>
      <RouterContext {...renderProps}/>
    </Provider>);
  } else {
    markup = renderToString(<PageNotFound/>);
  }
  return markup;
}
