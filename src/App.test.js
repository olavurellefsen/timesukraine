import { changeScenario } from './App';

it('should change the scenario', () => {
  const newState = changeScenario('scenarioSelection', 1);
  expect(newState.scenarioSelection).toBe(1);
});