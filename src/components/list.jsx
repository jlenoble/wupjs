import React, {Component} from 'react';
import Item from './item';

export default class List extends Component {
  render () {
    return <ul>
      {
        this.props.items.map(item => <Item
          item={item}
          key={item.id}
        />)
      }
    </ul>;
  }
}
