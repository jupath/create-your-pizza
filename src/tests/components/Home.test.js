import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { Home } from '../../components/pages/Home';

let addOrder, history, wrapper;

beforeEach(() => {
  addOrder = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<Home addOrder={addOrder} history={history} />);
});

test('should render Home correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should add ingredient', () => {
  wrapper.instance().handleAddIngredient('mushroom');
  const addedIngredient = wrapper.state('ingredients').filter(ingredient => ingredient.name === 'mushroom');
  expect(addedIngredient[0].isAdded).toBe(true);
  expect(wrapper.state('sumPrice')).toBe(4.9);
});

test('should remove ingredient', () => {
  wrapper.instance().handleAddIngredient('onion');
  wrapper.instance().handleRemoveIngredient('onion');
  const removedIngredient = wrapper.state('ingredients').filter(ingredient => ingredient.name === 'onion');
  expect(removedIngredient[0].isAdded).toBe(false);
  expect(wrapper.state('sumPrice')).toBe(4);
});

test('should call addOrder', () => {
  const ingredients = ['mushroom'];
  const price = '4.90';
  const order = {
    time: moment().format(),
    ingredients,
    price,
  };
  wrapper.instance().handleAddIngredient('mushroom');
  wrapper.instance().handleOrder();
  expect(addOrder).toHaveBeenLastCalledWith(order);
  expect(history.push).toHaveBeenLastCalledWith('/order');
});
