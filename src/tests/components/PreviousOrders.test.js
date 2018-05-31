import React from 'react';
import { shallow } from 'enzyme';
import { PreviousOrders } from '../../components/pages/PreviousOrders';

test('should render PreviousOrders correctly', () => {
  const uid = 'TestUser';
  const wrapper = shallow(<PreviousOrders uid={uid} />);

  wrapper.instance().getPreviousOrders();

  console.log(wrapper.state('previousOrders'))

  expect(wrapper).toMatchSnapshot();
});
