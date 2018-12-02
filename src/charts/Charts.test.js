import React from 'react';
import Charts from './Charts';

it('renders the main area', () => {
  const scenarioSelection = {
    scenarioSelection: "UDEC_BAU2050_01",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false,
  };
  const wrapper = shallow(<Charts closeWelcome={() => (false)} scenarioSelection={scenarioSelection} />);
  expect(wrapper.find('MainArea')).toHaveLength(1);
});