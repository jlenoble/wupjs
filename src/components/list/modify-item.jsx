import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class ModifyItem extends Component {
  constructor (props) {
    super(props);

    this.save = e => {
      e.preventDefault();

      this.props.save(this.textInput, () => {
        this.textInput.value = '';
      }, this.props.dispatch);
    };
  }

  componentDidMount () {
    this.textInput.focus();
  }

  render () {
    return <form
      className="input-group"
      onSubmit={this.save}
    >
      <input
        type="text"
        className="form-control"
        ref={node => {
          this.textInput = node;
        }}
        defaultValue={this.props.title}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          type="submit"
        >
          <span
            className="glyphicon glyphicon-floppy-disk"
            aria-hidden="true"
          ></span>
        </button>
      </span>
    </form>;
  }
}

ModifyItem.propTypes = {
  save: PropTypes.func.isRequired,
};

export default connect()(ModifyItem);
