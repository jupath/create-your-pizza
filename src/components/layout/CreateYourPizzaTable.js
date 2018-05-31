import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CreateYourPizzaItem from './CreateYourPizzaItem';
import { Container, TextCenter } from '../../styles/general';
import Button from '../../styles/buttons';
import device from '../../styles/device';

const Price = styled.h3`
  text-align: center;
`;

const Ingredients = styled.div`
  margin: 40px 0;
  @media ${device.desktop} {
    padding: 0 400px;
  }
`;

const CreateYourPizzaTable = props => (
  <Container>
    <Price>Price: ${props.sumPrice.toFixed(2)}</Price>
    <Ingredients>
      {
        props.ingredients.map(ingredient => (
          <CreateYourPizzaItem
            key={ingredient.name}
            ingredient={ingredient}
            handleAddIngredient={props.handleAddIngredient}
            handleRemoveIngredient={props.handleRemoveIngredient}
          />))
      }
    </Ingredients>
    <TextCenter>
      <Button onClick={() => props.handleOrder()}>Order</Button>
    </TextCenter>
  </Container>
);

CreateYourPizzaTable.propTypes = {
  sumPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddIngredient: PropTypes.func.isRequired,
  handleRemoveIngredient: PropTypes.func.isRequired,
  handleOrder: PropTypes.func.isRequired,
};

export default CreateYourPizzaTable;
