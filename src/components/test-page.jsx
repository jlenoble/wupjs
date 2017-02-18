import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchItemsIfNeeded} from '../actions';
import List from './list';

class TestPage extends Component {
  componentDidMount () {
    this.props.dispatch(fetchItemsIfNeeded());
  }

  render () {
    const {items, isFetching} = this.props;

    return <div>
      {isFetching && items.length === 0 &&
        <h2>Loading...</h2>
      }
      {!isFetching && items.length === 0 &&
        <h2>Empty.</h2>
      }
      {items.length > 0 &&
        <div style={{opacity: isFetching ? 0.5 : 1}}>
          <List items={items}/>
        </div>
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
  return Object.assign({
    items: [],
    isFetching: false,
  }, state.items);
}

export default connect(mapStateToProps)(TestPage);
