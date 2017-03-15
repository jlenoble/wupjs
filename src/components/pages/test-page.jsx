import React from 'react';
import Content from '../layouts/content';
import AllItemsCard from '../cards/all-items-card';
import AllSelectionsCard from '../cards/all-selections-card';
import CurrentSelectionCard from '../cards/current-selection-card';

export default () => (
  <Content>
    <AllItemsCard/>
    <CurrentSelectionCard/>
    <AllSelectionsCard/>
  </Content>
);
