import React from 'react';
import Content from '../layouts/content';
import {AllItemsCard, CurrentSelectionCard, AllSelectionsCard}
  from '../list/items-cards';

export default () => (
  <Content>
    <AllItemsCard/>
    <CurrentSelectionCard/>
    <AllSelectionsCard/>
  </Content>
);
