import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class EditItem extends Component {
  constructor (props) {
    super(props);
    this.edit = this.props.edit.bind(undefined, this.props.dispatch);
  }

  render () {
    return <button
      className="btn btn-default"
      onClick={this.edit}
    >
      <span
        className="glyphicon glyphicon-pencil"
        aria-hidden="true"
      ></span>
    </button>;
  }
}

EditItem.propTypes = {
  edit: PropTypes.func.isRequired,
};

export default connect()(EditItem);
