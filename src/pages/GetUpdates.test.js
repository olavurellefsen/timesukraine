import React from 'react';
import GetUpdates from './GetUpdates';

it('renders title', () => {
  const wrapper = shallow(<GetUpdates />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('Abonnér på opdateringer');
});