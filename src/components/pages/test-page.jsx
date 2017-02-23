import React from 'react';
import Content from '../layouts/content';
import AllItemsCard from '../list/all-items-card';
import CurrentSelectionCard from '../list/current-selection-card';
import AllSelectionsCard from '../list/all-selections-card';

export default () => (
  <Content>
    <AllItemsCard/>
    <CurrentSelectionCard/>
    <AllSelectionsCard/>
  </Content>
);
