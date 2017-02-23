import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PageFooter extends Component {
  render () {
    return <footer>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </footer>;
  }
}
