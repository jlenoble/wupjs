import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
  render () {
    return <div className="app-container">
      <header>
        <Link to="/">
          <h1 className="logo">WUP</h1>
        </Link>
      </header>
      <div className="app-content">{this.props.children}</div>
    </div>;
  }
}
