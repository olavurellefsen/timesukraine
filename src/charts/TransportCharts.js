
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTransport'
import StackedBarDiffChart from './StackedBarDiffChartTransport'

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
            <StackedBarChart chartName='_TRA_Transport systemomkostninger' chartTitle='Transport systemomkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="Mkr" minY={0} maxY={400000} />
            <StackedBarChart chartName='_TRA_Transport sektorens energifor' chartTitle='Transport sektorens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400} />
            <StackedBarChart chartName='_TRA_Transport passager km' chartTitle='Transport passager km' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mio. Pkm" minY={0} maxY={250000} />
            <StackedBarChart chartName='_TRA_Transport investering i lades' chartTitle='Investering i ladestander' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="Mkr" minY={0} maxY={2500} />
            <StackedBarChart chartName='_TRA_Transport gods km' chartTitle='Gods km' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mio. tkm" minY={0} maxY={400000} />
            <StackedBarChart chartName='_TRA_Transport CO2 emissioner' chartTitle='CO2 emissioner' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="kt" minY={0} maxY={24000} />
            <StackedBarChart chartName='_TRA_Transport brændslesforbrug lu' chartTitle='Brændselsforbrug luftfart' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={160} />
            <StackedBarChart chartName='_TRA_Transport brændselsforbrug sø' chartTitle='Brændselsforbrug søfart' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={60} />
            <StackedBarChart chartName='_TRA_Transport brændselsforbrug bi' chartTitle='Brændselsforbrug biler' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={100} />
            <StackedBarChart chartName='_TRA_Transport brændselsforbrug øv' chartTitle='Brændselsforbrug øvrig land' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={100} />
            <StackedBarChart chartName='_TRA_Transport - bil bestanden' chartTitle='Bilbestanden' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="k" minY={0} maxY={4000} />
          </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_TRA_Transport systemomkostninger' chartTitle='Transport systemomkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="Mkr" minY={-100000} maxY={100000} />
            <StackedBarDiffChart chartName='_TRA_Transport sektorens energifor' chartTitle='Transport sektorens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-100} maxY={100} />
            <StackedBarDiffChart chartName='_TRA_Transport passager km' chartTitle='Transport passager km' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mio. Pkm" minY={-40000} maxY={40000} />
            <StackedBarDiffChart chartName='_TRA_Transport investering i lades' chartTitle='Investering i ladestander' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="Mkr" minY={-500} maxY={500} />
            <StackedBarDiffChart chartName='_TRA_Transport gods km' chartTitle='Gods km' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mio. tkm" minY={-200000} maxY={200000} />
            <StackedBarDiffChart chartName='_TRA_Transport CO2 emissioner' chartTitle='CO2 emissioner' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="kt" minY={-4000} maxY={4000} />
            <StackedBarDiffChart chartName='_TRA_Transport brændslesforbrug lu' chartTitle='Brændselsforbrug luftfart' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
            <StackedBarDiffChart chartName='_TRA_Transport brændselsforbrug sø' chartTitle='Brændselsforbrug søfart' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
            <StackedBarDiffChart chartName='_TRA_Transport brændselsforbrug bi' chartTitle='Brændselsforbrug biler' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
            <StackedBarDiffChart chartName='_TRA_Transport brændselsforbrug øv' chartTitle='Brændselsforbrug øvrig land' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
            <StackedBarDiffChart chartName='_TRA_Transport - bil bestanden' chartTitle='Bilbestanden' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="k" minY={-4000} maxY={4000} />
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