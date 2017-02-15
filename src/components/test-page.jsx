import React, {Component} from 'react';
import List from './list';

const items = [];

export default class TestPage extends Component {
  render () {
    return <div>
      <h1>Test</h1>
      <List items={items}/>
    </div>;
  }
}
