import React, {PropTypes} from 'react';
import List from '../list/list';
import {itemsPropType} from '../list/proptypes';

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
  isFetching: PropTypes.bool,
  ui: PropTypes.object,
};

CardBlock.defaultProps = {
  isFetching: false,
  ui: {},
};

export default CardBlock;
