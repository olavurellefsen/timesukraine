import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import Disclaimer from '../alert/Disclaimer'
import StackedBarChart from './StackedBarChart'
import StackedBarDiffChart from './StackedBarDiffChart'
import { NamespacesConsumer } from 'react-i18next';

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
    <NamespacesConsumer>{t =>
      <MainArea>
        {(props.scenarioSelection.showWelcome === true) && <Welcome closeWelcome={props.closeWelcome} />}
        {(props.scenarioSelection.showDisclaimer === true) && <Disclaimer closeWelcome={props.closeWelcome} />}
        {(props.scenarioSelection.showDifference === false || (props.scenarioSelection.showDifference === true && selectedScenario2 === "")) &&
          <Flex>
		<StackedBarChart chartName='web1_CO2-eq Emissions by Secto' chartTitle={t('chart-titles.CO2-EQ-emissions')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.Mt')} minY={0} maxY={340} />
            <StackedBarChart chartName='web1_Expenditures' chartTitle={t('chart-titles.expenditures')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} divideValues={1000} label={t('units.BEuro')} minY={0} maxY={120000} />
            <StackedBarChart chartName='web1_Lump_Investments' chartTitle={t('chart-titles.lump-investment')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} divideValues={1000} label={t('units.BEuro')} minY={0} maxY={200000} />
            <StackedBarChart chartName='web1_Primary Energy balance' chartTitle={t('chart-titles.primary-energy-balance')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={0} maxY={120} />
            <StackedBarChart chartName='web1_TPES' chartTitle={t('chart-titles.tpes')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label={t('units.mtoe')} minY={0} maxY={140} minY2={0} maxY2={1} label2={t('misc.RE-share')} Y2Percentage={true} />
            <StackedBarChart chartName='web3_Final Energy by Fuels' chartTitle={t('chart-titles.final-energy-by-fuels')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={0} maxY={100} />
            <StackedBarChart chartName='web3_Final Energy by Sector' chartTitle={t('chart-titles.final-energy-by-sector')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={0} maxY={100} />
		  </Flex>
        }
        {(props.scenarioSelection.showDifference === true && selectedScenario2 !== "") &&
          <Flex>
            <StackedBarDiffChart chartName='web1_CO2-eq Emissions by Secto' chartTitle={t('chart-titles.CO2-EQ-emissions')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.Mt')} minY={-105} maxY={105} />
            <StackedBarDiffChart chartName='web1_Expenditures' chartTitle={t('chart-titles.expenditures')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} divideValues={1000} label={t('units.BEuro')} minY={-3900} maxY={3900} />
            <StackedBarDiffChart chartName='web1_Lump_Investments' chartTitle={t('chart-titles.lump-investment')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} divideValues={1000} label={t('units.BEuro')} minY={-18000} maxY={18000} />
            <StackedBarDiffChart chartName='web1_Primary Energy balance' chartTitle={t('chart-titles.primary-energy-balance')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={-12000} maxY={12000} />
            <StackedBarDiffChart chartName='web1_TPES' chartTitle={t('chart-titles.tpes')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label={t('units.mtoe')} minY={-18000} maxY={18000} minY2={-0.16} maxY2={0.16} label2={t('units.RE-share')} Y2Percentage={true}/>
            <StackedBarDiffChart chartName='web3_Final Energy by Fuels' chartTitle={t('chart-titles.final-energy-by-fuels')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={-2700} maxY={2700} />
            <StackedBarDiffChart chartName='web3_Final Energy by Sector' chartTitle={t('chart-titles.final-energy-by-sector')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={-2700} maxY={2700} />
		  </Flex>
        }
      </MainArea>
    }</NamespacesConsumer>

  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}

export default Charts;