import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class RemoveItem extends Component {
  constructor (props) {
    super(props);
    this.doDelete = this.props.doDelete.bind(undefined, this.props.dispatch);
  }

  render () {
    return <button
      onClick={this.doDelete}
    >✖</button>;
  }
}

export default connect()(RemoveItem);
