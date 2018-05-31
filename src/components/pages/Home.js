import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addOrder } from '../../actions/order';
import Pizza from '../layout/Pizza';
import CreateYourPizzaTable from '../layout/CreateYourPizzaTable';

const OrderTableWrapper = styled.div`

`;

export class Home extends Component {
  state = {
    sumPrice: 4,
    ingredients: [{ name: 'mushroom', isAdded: false, price: 0.9 }, { name: 'onion', isAdded: false, price: 0.8 }, { name: 'olive', isAdded: false, price: 1 }, { name: 'salami', isAdded: false, price: 1.5 }, { name: 'bacon', isAdded: false, price: 1.4 }],
  };

  handleAddIngredient = (name) => {
    const ingredients = this.state.ingredients.map((ingredient) => {
      if (ingredient.name === name && ingredient.isAdded !== true) {
        this.setState({ sumPrice: this.state.sumPrice + ingredient.price });
        return ({
          ...ingredient,
          isAdded: true,
        });
      }
      return ingredient;
    });
    this.setState({ ingredients });
  }

  handleRemoveIngredient = (name) => {
    const ingredients = this.state.ingredients.map((ingredient) => {
      if (ingredient.name === name && ingredient.isAdded === true) {
        this.setState({ sumPrice: this.state.sumPrice - ingredient.price });
        return ({
          ...ingredient,
          isAdded: false,
        });
      }
      return ingredient;
    });
    this.setState({ ingredients });
  }

  handleOrder = () => {
    const ingredients = this.state.ingredients
      .filter(ingredient => ingredient.isAdded === true)
      .map(ingredient => ingredient.name);

    const price = this.state.sumPrice.toFixed(2);

    const order = {
      time: moment().format(),
      ingredients,
      price,
    };

    this.props.addOrder(order);
    this.props.history.push('/order');
  }

  render() {
    return (
      <Fragment>
        <Pizza />
        <OrderTableWrapper>
          <CreateYourPizzaTable
            sumPrice={this.state.sumPrice}
            ingredients={this.state.ingredients}
            handleAddIngredient={this.handleAddIngredient}
            handleRemoveIngredient={this.handleRemoveIngredient}
            handleOrder={this.handleOrder}
          />
        </OrderTableWrapper>
      </Fragment>
    );
  }
}

Home.propTypes = {
  addOrder: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
});

export default connect(null, mapDispatchToProps)(Home);
