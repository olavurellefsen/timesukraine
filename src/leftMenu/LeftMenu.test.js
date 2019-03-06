import React from 'react';
import {ScenarioSelectionMenu} from './LeftMenu';

it('renders the menu', () => {
  const scenarioSelection = {
    scenarioSelection: "UDEC_S_PAETT0N_00000_00-v01",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false
  };
  const wrapper = shallow(<ScenarioSelectionMenu
    updateScenarioSelection={() => (false)}
    scenarioSelection={scenarioSelection}
    scenarioCombinations={{scenarioOptions: []}}
    toggleDifference={() => (false)}
    t={key => key}
  />);
  expect(wrapper.find('MenuLayout')).toHaveLength(1);
});