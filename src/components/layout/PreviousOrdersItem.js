import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class PreviousOrderItem extends Component {
  state = {

  };

  render() {
    return (
      <tr>
        <td>{moment(this.props.previousOrder.order.time).format('MMMM Do, YYYY')}</td>
        <td>{this.props.previousOrder.order.ingredients.join(', ')}</td>
        <td>${this.props.previousOrder.order.price}</td>
      </tr>
    );
  }
}

PreviousOrderItem.propTypes = {
  previousOrder: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PreviousOrderItem;
