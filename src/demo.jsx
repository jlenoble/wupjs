import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Store from './store';

window.onload = () => {
  render(<Store/>, document.getElementById('app'));
};
