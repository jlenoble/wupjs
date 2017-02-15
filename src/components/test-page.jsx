import React, {Component} from 'react';
import AddItem from './test/add-item';
import VisibleList from './test/visible-list';
import Footer from './test/footer';

export default class TestPage extends Component {
  render () {
    return <div>
      <AddItem/>
      <VisibleList/>
      <Footer/>
    </div>;
  }
}
