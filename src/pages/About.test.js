import React from 'react';
import About from './About';

it('renders title', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('<WithMergedOptions(TransComponent) />');
});