import React from 'react';
import LeftMenuMobile from './LeftMenu.mobile';

it('renders the mobile menu', () => {
  const scenarioSelection = {
    scenarioSelection: "UDEC_BAU2050_01",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false
  };
  const wrapper = shallow(<LeftMenuMobile
    updateScenarioSelection={() => (false)}
    scenarioSelection={scenarioSelection}
    scenarioCombinations={{scenarioOptions: []}}
    toggleDifference={() => (false)}
  />);
  expect(wrapper.find('MenuLayout')).toHaveLength(1);
});