import React from 'react';
import Recommendations from './Recommendations';

it('renders title', () => {
  const wrapper = shallow(<Recommendations />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('Recommendations');
});