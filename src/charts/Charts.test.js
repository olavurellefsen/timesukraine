import React from 'react';
import Charts from './Charts';

it('renders the main area', () => {
  const scenarioSelection = {
    scenarioSelection: "UDEC_S_PAETT0N_00000_00-v01",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false,
  };
  const wrapper = shallow(<Charts closeWelcome={() => (false)} scenarioSelection={scenarioSelection} />);
  expect(wrapper.find('MainArea')).toHaveLength(1);
});