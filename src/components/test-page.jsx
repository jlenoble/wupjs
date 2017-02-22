import React from 'react';
import AllItemsCard from './list/all-items-card';
import CurrentSelectionCard from './list/current-selection-card';

export default () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <AllItemsCard/>
      </div>
      <div className="col">
        <CurrentSelectionCard/>
      </div>
    </div>
  </div>
);
