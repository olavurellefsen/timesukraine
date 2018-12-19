import React from 'react';
import Prerequisites from './Assumptions';

it('renders title', () => {
  const wrapper = shallow(<Prerequisites />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('<WithMergedOptions(TransComponent) />');
});