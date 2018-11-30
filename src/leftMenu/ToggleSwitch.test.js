import React from 'react';
import ToggleSwitch from './ToggleSwitch';

it('renders the toggle switch', () => {
  const wrapper = shallow(<ToggleSwitch />);
  expect(wrapper.find('SwitchBoxAround')).toHaveLength(1);
});