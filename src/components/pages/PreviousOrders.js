import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import database from '../../firebase/firebase';
import PreviousOrdersItem from '../layout/PreviousOrdersItem';
import { Container, Title } from '../../styles/general';
import { Table, Thead, Tbody } from '../../styles/table';

export class PreviousOrders extends Component {
  state = {
    previousOrders: [],
  }

  componentDidMount() {
    this.getPreviousOrders();
  }

  getPreviousOrders = () => {
    database.ref(`users/${this.props.uid}/orders`)
      .once('value')
      .then((snapshot) => {
        const previousOrders = [];
        snapshot.forEach((childSnapshot) => {
          previousOrders.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        this.setState({ previousOrders });
      });
  }

  render() {
    return (
      <Container>
        <Title>My previous orders</Title>
        <Table>
          <Thead>
            <tr><td>Date</td><td>Toppings</td><td>Price</td></tr>
          </Thead>
          <Tbody>
            {
              this.state.previousOrders.length > 0 ?
              this.state.previousOrders.map(previousOrder => <PreviousOrdersItem key={previousOrder.id} previousOrder={previousOrder} />) :
              <tr><td colSpan="3">You have no previous orders</td></tr>
            }
          </Tbody>
        </Table>
      </Container>
    );
  }
}

PreviousOrders.propTypes = {
  uid: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

export default connect(mapStateToProps)(PreviousOrders);
