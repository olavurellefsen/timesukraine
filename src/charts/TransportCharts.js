
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTransport'
import StackedBarDiffChart from './StackedBarDiffChartTransport'
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
            <StackedBarChart chartName='web_Final Energy to AGR by Sub' chartTitle={t('chart-titles.final-energy-to-AGR')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'3500'} />
            <StackedBarChart chartName='web_Final Energy to COM by Sub' chartTitle={t('chart-titles.final-energy-to-COM')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'9000'} />
            <StackedBarChart chartName='web_Final Energy to IND NEEAP' chartTitle={t('chart-titles.final-energy-to-IND')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'35000'} />
            <StackedBarChart chartName='web_Final Energy to RES by Sub' chartTitle={t('chart-titles.final-energy-to-RES')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={'0'} maxY={'1200'} />
            <StackedBarChart chartName='web_Final Energy to TRN by Sub' chartTitle={t('chart-titles.final-energy-to-TRN')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'12000'} />
          </Flex>
        }
        {(props.scenarioSelection.showDifference === true && selectedScenario2 !== "") &&
          <Flex>
            <StackedBarDiffChart chartName='web_Final Energy to AGR by Sub' chartTitle={t('chart-titles.final-energy-to-AGR')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'2736'} />
            <StackedBarDiffChart chartName='web_Final Energy to COM by Sub' chartTitle={t('chart-titles.final-energy-to-COM')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'2967'} />
            <StackedBarDiffChart chartName='web_Final Energy to IND NEEAP' chartTitle={t('chart-titles.final-energy-to-IND')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'17047'} />
            <StackedBarDiffChart chartName='web_Final Energy to RES by Sub' chartTitle={t('chart-titles.final-energy-to-RES')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={'0'} maxY={'603'} />
            <StackedBarDiffChart chartName='web_Final Energy to TRN by Sub' chartTitle={t('chart-titles.final-energy-to-TRN')} selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='ktoe' minY={'0'} maxY={'3835'} />
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