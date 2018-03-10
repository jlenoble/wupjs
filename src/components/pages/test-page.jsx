import React from 'react';
import Content from '../layouts/content';
import SelectItemsCard from '../cards/select-items-card';
import AllSelectionsCard from '../cards/all-selections-card';
import CurrentSelectionCard from '../cards/current-selection-card';

export default () => (
  <Content>
    <SelectItemsCard/>
    <CurrentSelectionCard/>
    <AllSelectionsCard/>
  </Content>
);
