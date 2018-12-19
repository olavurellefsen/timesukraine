
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartSupply'
import StackedBarDiffChart from './StackedBarDiffChartSupply'
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
            <StackedBarChart chartName='web_CO2-eq Emissions by Sector' chartTitle={t('chart-titles.CO2-EQ-emissions')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Mt' minY={'0'} maxY={'350'} />
            <StackedBarChart chartName='web_Expenditures - Fuel Costs' chartTitle={t('chart-titles.fuel-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'13000'} />
            <StackedBarChart chartName='web_Expenditures - INV' chartTitle={t('chart-titles.investment-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'60000'} />
            <StackedBarChart chartName='web_Expenditures - O&M' chartTitle={t('chart-titles.OandM-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'40000'} />
            <StackedBarChart chartName='web_fuel import' chartTitle={t('chart-titles.fuel-import')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'60000'} />
          </Flex>
        }
        {(props.scenarioSelection.showDifference === true && selectedScenario2 !== "") &&
          <Flex>
            <StackedBarDiffChart chartName='web_CO2-eq Emissions by Sector' chartTitle={t('chart-titles.CO2-EQ-emissions')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Mt' minY={'0'} maxY={'105'} />
            <StackedBarDiffChart chartName='web_Expenditures - Fuel Costs' chartTitle={t('chart-titles.fuel-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'3900'} />
            <StackedBarDiffChart chartName='web_Expenditures - INV' chartTitle={t('chart-titles.investment-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'18000'} />
            <StackedBarDiffChart chartName='web_Expenditures - O&M' chartTitle={t('chart-titles.OandM-costs')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='M Euro' minY={'0'} maxY={'12000'} />
            <StackedBarDiffChart chartName='web_fuel import' chartTitle={t('chart-titles.fuel-import')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'18000'} />
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