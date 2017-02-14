import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  render () {
    return <nav className="menu">
      <Link key="test" to="/test" activeClassName="active">
        Test
      </Link>
    </nav>;
  }
}
