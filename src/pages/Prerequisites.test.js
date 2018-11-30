import React from 'react';
import Prerequisites from './Prerequisites';

it('renders title', () => {
  const wrapper = shallow(<Prerequisites />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('Assumptions');
});