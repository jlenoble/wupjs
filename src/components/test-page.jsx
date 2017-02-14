import React, {Component} from 'react';
import {Link} from 'react-router';
import List from './list';

const items = [
  {
    id: 1,
    title: 'toto',
  },
  {
    id: 2,
    title: 'titi',
  },
  {
    id: 3,
    title: 'tutu',
  },
  {
    id: 4,
    title: 'tata',
  },
];

export default class TestPage extends Component {
  render () {
    return <div className="test">
      <h1>Test</h1>
      <List items={items}/>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>;
  }
}
