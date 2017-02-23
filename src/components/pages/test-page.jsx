import React from 'react';
import Content from '../layouts/content';
import AllItemsCard from '../list/all-items-card';
import CurrentSelectionCard from '../list/current-selection-card';

export default () => (
  <Content>
    <AllItemsCard/>
    <CurrentSelectionCard/>
  </Content>
);
