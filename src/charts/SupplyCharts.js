
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartSupply'
import StackedBarDiffChart from './StackedBarDiffChartSupply'

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
  flex-direction: ${props => (props.direction==='column' ? 'column' : 'row')};
  `;
  Flex.displayName = 'Flex';
const Charts = (props) => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;

  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
        {(props.scenarioSelection.showDifference===false || (props.scenarioSelection.showDifference===true && selectedScenario2==="")) && 
          <Flex>
            <StackedBarChart chartName='webS_All Electricity NEW Capaci' chartTitle='webS_All Electricity NEW Capaci' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={0} maxY={400} />
            <StackedBarChart chartName='webS_All Electricity Capacity D' chartTitle='webS_All Electricity Capacity D' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={0} maxY={400} />
            <StackedBarChart chartName='webS_All Electricity Production' chartTitle='webS_All Electricity Production' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400} />
            <StackedBarChart chartName='webS_CO2-eq Emissions by Sector' chartTitle='webS_CO2-eq Emissions by Sector' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="kt" minY={0} maxY={400} />    
          </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='webS_All Electricity NEW Capaci' chartTitle='webS_All Electricity NEW Capaci' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={0} maxY={400} />
            <StackedBarDiffChart chartName='webS_All Electricity Capacity D' chartTitle='webS_All Electricity Capacity D' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={0} maxY={400} />
            <StackedBarDiffChart chartName='webS_All Electricity Production' chartTitle='webS_All Electricity Production' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400} />
            <StackedBarDiffChart chartName='webS_CO2-eq Emissions by Sector' chartTitle='webS_CO2-eq Emissions by Sector' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="kt" minY={0} maxY={400} />
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