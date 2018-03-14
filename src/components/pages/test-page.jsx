import React from 'react';
import Content from '../layouts/content';
import UpdateSelectionsCard from '../cards/update-selections-card';
import SelectItemsCard from '../cards/select-items-card';
import CurrentSelectionCard from '../cards/current-selection-card';

export default () => (
  <Content>
    <SelectItemsCard/>
    <CurrentSelectionCard/>
    <UpdateSelectionsCard/>
  </Content>
);
