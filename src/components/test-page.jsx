import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../actions';
import List, {AddItem} from './list';

class TestPage extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return <div>
      <AddItem/>
      {isFetching && items.length === 0 &&
        <h2>Loading...</h2>
      }
      {!isFetching && items.length === 0 &&
        <h2>Empty.</h2>
      }
      {items.length > 0 &&
        <List items={items}/>
      }
    </div>;
  }
}

TestPage.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  const props = Object.assign({
    items: [],
    isFetching: false,
    _id: '',
    isBeingEdited: false,
  }, state.items, state.currentItem);

  const isBeingEdited = props.isBeingEdited;

  if (isBeingEdited) {
    const _id = props._id;

    props.items = props.items.map(item => {
      return item._id !== _id ? item : Object.assign({
        isBeingEdited,
      }, item);
    });
  }

  return props;
}

export default connect(mapStateToProps)(TestPage);
