import React from 'react';
import List from './list';
import {itemsPropType} from './proptypes';

const CardBlock = ({items, isFetching, ui}) => (
  <div className="card-block">
    {isFetching && items.length === 0 &&
      <h2>Loading...</h2>
    }
    {!isFetching && items.length === 0 &&
      <h2>Empty.</h2>
    }
    {items.length > 0 &&
      <List
        items={items}
        ui={ui}
      />
    }
  </div>
);

CardBlock.propTypes = {
  items: itemsPropType.isRequired,
};

export default CardBlock;
