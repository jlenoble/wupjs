import React, {Component} from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';

export default class Layout extends Component {
  render () {
    return <div className="app-container">
      <PageHeader/>
      <div className="app-content">{this.props.children}</div>
      <PageFooter/>
    </div>;
  }
}
