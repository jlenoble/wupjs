import React from 'react';
import Content from '../layouts/content';
import SelectItemsCard from '../cards/select-items-card';
import OpenSelectionsCard from '../cards/open-selections-card';
import CurrentSelectionCard from '../cards/current-selection-card';

export default () => (
  <Content>
    <SelectItemsCard/>
    <CurrentSelectionCard/>
    <OpenSelectionsCard/>
  </Content>
);
