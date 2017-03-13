import React from 'react';
import {itemPropType} from '../list/proptypes';

const TitleGroup = ({item}) => {
  return (
    <span>
      {item.title}
    </span>
  );
};

TitleGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default TitleGroup;
