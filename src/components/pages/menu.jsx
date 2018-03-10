import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  render () {
    return <nav>
      <Link key="test" to="/test" activeClassName="active">
        Test
      </Link>
      <br/>
      <Link key="items" to="/items" activeClassName="active">
        All items
      </Link>
      <br/>
      <Link key="selections" to="/selections" activeClassName="active">
        All selections
      </Link>
    </nav>;
  }
}
