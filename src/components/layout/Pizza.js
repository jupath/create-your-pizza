import React from 'react';
import styled from 'styled-components';
import PizzaImg from '../../images/pizza.png';

const PizzaImage = styled.img`
  display: block;
  margin: 30px auto;
`;

const Pizza = () => (
  <PizzaImage src={PizzaImg} alt="" />
);

export default Pizza;
