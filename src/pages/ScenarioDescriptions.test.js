import React from 'react';
import ScenarioDescriptions from './ScenarioDescriptions';

it('renders title', () => {
  const wrapper = shallow(<ScenarioDescriptions />);
  expect(wrapper.find('AboutHeader').children().text()).toEqual('Scenario Descriptions');
});