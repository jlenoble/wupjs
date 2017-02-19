import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class RemoveItem extends Component {
  constructor (props) {
    super(props);
    this.doDelete = this.props.doDelete.bind(undefined, this.props.dispatch);
  }

  render () {
    return <button
      className="btn btn-default"
      aria-label="Left Align"
      onClick={this.doDelete}
    >
      <span
        className="glyphicon glyphicon-trash"
        aria-hidden="true"
      ></span>
    </button>;
  }
}

RemoveItem.propTypes = {
  doDelete: PropTypes.func.isRequired,
};

export default connect()(RemoveItem);
