
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTab3'
import StackedBarDiffChart from './StackedBarDiffChartTab3'
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
        {(props.scenarioSelection.showDifference === false || (props.scenarioSelection.showDifference === true && selectedScenario2 === "")) &&
          <Flex>
            <StackedBarChart chartName='web3_Final Energy by Fuels' chartTitle={t('chart-titles.final-energy-by-fuels')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={0} maxY={100} />
            <StackedBarChart chartName='web3_Final Energy by Sector' chartTitle={t('chart-titles.final-energy-by-sector')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={0} maxY={100} />
            <StackedBarChart chartName='web3_Final Energy to AGR by Su' chartTitle={t('chart-titles.final-energy-to-AGR')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={0} maxY={3500} />
            <StackedBarChart chartName='web3_Final Energy to COM by Su' chartTitle={t('chart-titles.final-energy-to-COM')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={0} maxY={9000} />
            <StackedBarChart chartName='web3_Final Energy to IND NEEAP' chartTitle={t('chart-titles.final-energy-to-IND')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={0} maxY={35000} />
            <StackedBarChart chartName='web3_Final Energy to RES by Su' chartTitle={t('chart-titles.final-energy-to-RES')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.PJ')} minY={0} maxY={1200} />
            <StackedBarChart chartName='web3_Final Energy to TRN by Su' chartTitle={t('chart-titles.final-energy-to-TRN')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={0} maxY={12000} />
		  </Flex>
        }
        {(props.scenarioSelection.showDifference === true && selectedScenario2 !== "") &&
          <Flex>
            <StackedBarDiffChart chartName='web3_Final Energy by Fuels' chartTitle={t('chart-titles.final-energy-by-fuels')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={-2700} maxY={2700} />
            <StackedBarDiffChart chartName='web3_Final Energy by Sector' chartTitle={t('chart-titles.final-energy-by-sector')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.mtoe')} minY={-2700} maxY={2700} />
            <StackedBarDiffChart chartName='web3_Final Energy to AGR by Su' chartTitle={t('chart-titles.final-energy-to-AGR')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={-2700} maxY={2700} />
            <StackedBarDiffChart chartName='web3_Final Energy to COM by Su' chartTitle={t('chart-titles.final-energy-to-COM')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={-2900} maxY={2900} />
            <StackedBarDiffChart chartName='web3_Final Energy to IND NEEAP' chartTitle={t('chart-titles.final-energy-to-IND')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={-17000} maxY={17000} />
            <StackedBarDiffChart chartName='web3_Final Energy to RES by Su' chartTitle={t('chart-titles.final-energy-to-RES')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.PJ')} minY={-600} maxY={600} />
            <StackedBarDiffChart chartName='web3_Final Energy to TRN by Su' chartTitle={t('chart-titles.final-energy-to-TRN')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label={t('units.ktoe')} minY={-3800} maxY={3800} />
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