import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import database from '../../firebase/firebase';
import OrderForm from '../layout/OrderForm';
import colors from '../../styles/colors';

const SuccessMessage = styled.h2`
  color: ${colors.green};
  margin-top: 100px;
  text-align: center;
`;

class Order extends Component {
  state = {
    sentOrder: false,
  }

  sendOrder = (shipping, order) => {
    const orderDetails = {
      shipping,
      order,
    };

    if (this.props.uid !== '') {
      database.ref(`users/${this.props.uid}/orders`)
        .push(orderDetails)
        .then(() => this.setState({ sentOrder: true }));
    } else {
      this.setState({ sentOrder: true });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.sentOrder ?
            <SuccessMessage>Thanks, your order will arrive soon!</SuccessMessage>
          :
            <OrderForm sendOrder={this.sendOrder} />
        }
      </div>
    );
  }
}

Order.propTypes = {
  uid: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

export default connect(mapStateToProps)(Order);
