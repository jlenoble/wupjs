import React from 'react';
import OneRow from './one-row';

export default ({children}) => (
  <div className="container-fluid">
    <OneRow>
      {children}
    </OneRow>
  </div>
);
