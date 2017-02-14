import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './components/app-routes';

window.onload = () => {
  render(<AppRoutes/>, document.getElementById('app'));
};
