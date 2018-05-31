import React from 'react';
import styled from 'styled-components';
import { TiPlus, TiMinus } from 'react-icons/lib/ti';
import PropTypes from 'prop-types';

const PizzaItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const IngredientButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const IngredientName = styled.span`
  font-weight: ${props => (props.isAdded && 'bold')};
`;

const CreateYourPizzaItem = (props) => {
  const { name, isAdded, price } = props.ingredient;
  return (
    <PizzaItem>
      <div>
        <IngredientName isAdded={isAdded}>{name} (${price})</IngredientName>
      </div>
      <div>
        <IngredientButton onClick={() => props.handleAddIngredient(name)} disabled={isAdded}>
          <TiPlus />
        </IngredientButton>{' '}
        <IngredientButton onClick={() => props.handleRemoveIngredient(name)} disabled={!isAdded}>
          <TiMinus />
        </IngredientButton>
      </div>
    </PizzaItem>
  );
};

CreateYourPizzaItem.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.any).isRequired,
  handleAddIngredient: PropTypes.func.isRequired,
  handleRemoveIngredient: PropTypes.func.isRequired,
};

export default CreateYourPizzaItem;
