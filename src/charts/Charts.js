import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
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
            <StackedBarChart chartName='_CO2 emissioner' chartTitle='CO2-emissioner og VE-andel' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="Kt" minY={-5000} maxY={40000} minY2={0} maxY2={1} label2="Vedvarende energi andel" Y2Percentage={true} />
            <StackedBarChart chartName='_Biobrændsels forbrug' chartTitle='Biobrændsels-forbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400} />
            <StackedBarChart chartName='_Elproduktion' chartTitle='El-produktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400} />
            <StackedBarChart chartName='_Elkapacitet' chartTitle='El-kapacitet' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={0} maxY={40000} />
            <StackedBarChart chartName='_El netto eksport' chartTitle='El-netto-eksport' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" label2="Netto eksport (PJ)" minY={-100} maxY={240}  minY2={-100} maxY2={160} Y2Percentage={false} />
            <StackedBarChart chartName='_Fjernvarmeproduktion' chartTitle='Fjernvarme-produktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={200} />
            <StackedBarChart chartName='_Husholdningers varmeforbrug' chartTitle='Husholdningers varmeforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={0} maxY={160} minY2={0} maxY2={36} Y2Percentage={false} />
            <StackedBarChart chartName='_Industriens energiforbrug' chartTitle='Industriens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={0} maxY={400} minY2={0} maxY2={120} Y2Percentage={false} />
            <StackedBarChart chartName='_Transport sektorens energifor' chartTitle='Transportsektorens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={350} />
            <StackedBarChart chartName='_Transport - bil bestanden' chartTitle='Transport - bil-bestand' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="1000 stk" minY={0} maxY={3000} />
            <StackedBarChart chartName='_Miljø og energi afgifter' chartTitle='Miljø- og energi-afgifter' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mia.kr" divideValues={1000} minY={-5000} maxY={100000} />
            <StackedBarChart chartName='_Systemomkostninger' chartTitle='Systemomkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mia.Kr" divideValues={1000} minY={0} maxY={300000} />
          </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_CO2 emissioner' chartTitle='CO2-emissioner og VE-andel' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="Kt" minY={-9000} maxY={9000} minY2={-0.16} maxY2={0.16} label2="Vedvarende energi andel" Y2Percentage={true} />
            <StackedBarDiffChart chartName='_Biobrændsels forbrug' chartTitle='Biobrændsels-forbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-170} maxY={170} />
            <StackedBarDiffChart chartName='_Elproduktion' chartTitle='El-produktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-90} maxY={90} />
            <StackedBarDiffChart chartName='_Elkapacitet' chartTitle='El-kapacitet' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="MW" minY={-6000} maxY={6000} />
            <StackedBarDiffChart chartName='_El netto eksport' chartTitle='El-netto-eksport' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" label2="Netto eksport (PJ)" minY={-200} maxY={200}  minY2={-60} maxY2={60} Y2Percentage={false} />
            <StackedBarDiffChart chartName='_Fjernvarmeproduktion' chartTitle='Fjernvarme-produktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-100} maxY={100} />
            <StackedBarDiffChart chartName='_Husholdningers varmeforbrug' chartTitle='Husholdningers varmeforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={-8} maxY={8} minY2={-15} maxY2={15} Y2Percentage={false} />
            <StackedBarDiffChart chartName='_Industriens energiforbrug' chartTitle='Industriens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label="PJ" label2="Energibesparelser (PJ)" minY={-100} maxY={100} minY2={-50} maxY2={50} Y2Percentage={false} />
            <StackedBarDiffChart chartName='_Transport sektorens energifor' chartTitle='Transportsektorens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-120} maxY={120} />
            <StackedBarDiffChart chartName='_Transport - bil bestanden' chartTitle='Transport - bil-bestand' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="1000 stk" minY={-2000} maxY={2000} />
            <StackedBarDiffChart chartName='_Miljø og energi afgifter' chartTitle='Miljø- og energi-afgifter' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mia.kr" divideValues={1000} minY={-30000} maxY={30000} />
            <StackedBarDiffChart chartName='_Systemomkostninger' chartTitle='Systemomkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="mia.Kr" divideValues={1000} minY={-120000} maxY={120000} />
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