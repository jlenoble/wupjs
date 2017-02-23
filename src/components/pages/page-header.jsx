import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PageHeader extends Component {
  render () {
    return <header>
      <Link to="/">
        <h1>WUP</h1>
      </Link>
    </header>;
  }
}
