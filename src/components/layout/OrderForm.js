import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import Button from '../../styles/buttons';
import { Container, Title } from '../../styles/general';
import FormGroup from '../../styles/forms';

const OrderWrapper = styled.div`
  padding: 0 300px;
`;

const OrderDetails = styled.div`
  background-color: white;
  border: ${colors.borderColor} solid 1px;
  border-radius: .25rem;
  padding: 10px 20px 20px 20px;
`;

const Price = styled.h3`
  font-weight: bold;
`;

const FormWrapper = styled.div`
  padding: 30px 0;
`;

const ErrorMessage = styled.p`
  color: ${colors.red};
`;

class OrderForm extends Component {
  state = {
    shipping: {
      name: '',
      address: '',
      phone: '',
      message: '',
    },
    error: false,
  };

  handleSendOrder = (e) => {
    e.preventDefault();
    const { name, address, phone } = this.state.shipping;
    if (name === '' || address === '' || phone === '') {
      this.setState({ error: 'Please, fill out every required field!' });
    } else {
      this.props.sendOrder(this.state.shipping, this.props.order);
    }
  }

  render() {
    if (this.props.order.price === null) {
      this.props.history.push('/');
    }
    return (
      <Container>
        <OrderWrapper>
          <Title>My order</Title>
          <OrderDetails>
            <Price>Price: ${this.props.order.price}</Price>
            Toppings: {this.props.order.ingredients.join(', ')}
          </OrderDetails>
          <FormWrapper>
            <form onSubmit={this.handleSendOrder}>
              <FormGroup>
                <input
                  placeholder="Your name *"
                  onChange={e => this.setState({ shipping: { ...this.state.shipping, name: e.target.value } })}
                />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Your address *" onChange={e => this.setState({ shipping: { ...this.state.shipping, address: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Your phone number *" onChange={e => this.setState({ shipping: { ...this.state.shipping, phone: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <textarea placeholder="Message..." onChange={e => this.setState({ shipping: { ...this.state.shipping, message: e.target.value } })} />
              </FormGroup>
              <Button>Get my awesome pizza</Button>
            </form>
            {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
          </FormWrapper>
        </OrderWrapper>
      </Container>
    );
  }
}

OrderForm.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  sendOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  order: state.order,
});

export default withRouter(connect(mapStateToProps)(OrderForm));
