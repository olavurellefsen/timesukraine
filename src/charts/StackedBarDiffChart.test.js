import React from 'react';
import StackedBarDiffChart from './StackedBarDiffChart';

it('renders the chart title', () => {
  const selectedScenario = "UDEC_BAU2050_01";
  const selectedScenario2 = "UDEC_BAU2050_ILED_01";
  const chartName = "web_CO2-eq Emissions by Sector";
  const chartTitle = "Dummy Title";
  const combinedChart = false;
  const minY = 0;
  const maxY = 1;
  const label = "Dummy Label";

  const wrapper = shallow(<StackedBarDiffChart
    selectedScenario={selectedScenario}
    selectedScenario2={selectedScenario2}
    chartName={chartName}
    chartTitle={chartTitle}
    combinedChart={combinedChart}
    minY={minY}
    maxY={maxY}
    label={label}
  />);

  expect(wrapper.find('VictoryChart')).toHaveLength(1);
});

