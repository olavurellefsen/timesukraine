import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import Disclaimer from '../alert/Disclaimer'
import StackedBarChart from './StackedBarChart'
import StackedBarDiffChart from './StackedBarDiffChart'

const MainArea = styled.div`
  flex: 1;
  padding: 20px;
  `;
MainArea.displayName = 'MainArea';
const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction === 'column' ? 'column' : 'row')};
  `;
Flex.displayName = 'Flex';
const Charts = (props) => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;

  return (
    <MainArea>
      {(props.scenarioSelection.showWelcome === true) && <Welcome closeWelcome={props.closeWelcome} />}
      {(props.scenarioSelection.showDisclaimer === true) && <Disclaimer closeWelcome={props.closeWelcome} />}
      {(props.scenarioSelection.showDifference === false || (props.scenarioSelection.showDifference === true && selectedScenario2 === "")) &&
        <Flex>
          <StackedBarChart chartName='web_All Electricity Capacity D' chartTitle='All Electricity Capacity' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='GW' minY={'0'} maxY={'160'} />
          <StackedBarChart chartName='web_All Electricity NEW Capaci' chartTitle='New Capacity' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='GW' minY={'0'} maxY={'40'} />
          <StackedBarChart chartName='web_All Electricity Production' chartTitle='Electricity Production (incl. import)' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Billion Kwh' minY={'0'} maxY={'400'} />
          <StackedBarChart chartName='web_HEAT Production All types ' chartTitle='Heat Production' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'17000'} />
          <StackedBarChart chartName='web_Renewables Electricity Pro' chartTitle='Electricity from Renewables' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Billion Kwh' minY={'0'} maxY={'180'} />
        </Flex>
      }
      {(props.scenarioSelection.showDifference === true && selectedScenario2 !== "") &&
        <Flex>
          <StackedBarDiffChart chartName='web_All Electricity Capacity D' chartTitle='All Electricity Capacity' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='GW' minY={'0'} maxY={'100'} />
          <StackedBarDiffChart chartName='web_All Electricity NEW Capaci' chartTitle='New Capacity' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='GW' minY={'0'} maxY={'30'} />
          <StackedBarDiffChart chartName='web_All Electricity Production' chartTitle='Electricity Production (incl. import)' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Billion Kwh' minY={'0'} maxY={'300'} />
          <StackedBarDiffChart chartName='web_HEAT Production All types ' chartTitle='Heat Production' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'12000'} />
          <StackedBarDiffChart chartName='web_Renewables Electricity Pro' chartTitle='Electricity from Renewables' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Billion Kwh' minY={'0'} maxY={'120'} />
        </Flex>
      }
    </MainArea>
  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}

export default Charts;