import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScenarioList = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;
  ScenarioList.displayName = 'ScenarioList';
const ScenarioDivider = styled.div`
  height: 5px;
  `
  ScenarioDivider.displayName = 'ScenarioDivider';
const ScenarioHeader = styled.div`
  font-size: ${props => (props.narrowVersion ? '0.9em' : '1em')};
  padding: ${props => (props.narrowVersion ? '5px' : '0 12px 0 15px')};
  margin: 0px 0px 5px 0px;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  `;
  ScenarioHeader.displayName = 'ScenarioHeader';
const ScenarioOption = styled.div`
  font-size: ${props => (props.narrowVersion ? '0.7em' : '0.9em')};
  display: flex;
  align-items: center;
  height: ${props => (props.narrowVersion ? '12px' : '26px')};
  padding: ${props => (props.narrowVersion ? '5px' : '0 12px 0 15px')};
  position: relative;
  width: 100%;
  border-radius: 0;
  background-color: ${props => (props.selected ? 'green' : (props.selected2 ? 'red' : 'inherit'))};
  color: ${props => (props.selected ? 'white' : (props.selected2 ? 'white' : 'rgb(184,176,183)'))};
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.selected ? 'green' : (props.selected2 ? 'red' : '#555'))};
    > * {
      display: block;
      font-weight: ${props => (props.selected ? 'bold' : (props.selected2 ? 'bold' : 'normal'))};
    }
  }
  `;
  ScenarioOption.displayName = 'ScenarioOption';
const MenuSeparatorLine  = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100%;
  `;
  MenuSeparatorLine.displayName = 'MenuSeparatorLine';

class ScenarioSelectionList extends React.Component {

  handleChange = (event, value) => {
    this.props.updateScenarioSelection(event, this.props.name, value)
  }

  render() {
    const { dimensionOptions, dimensionTitle, narrowVersion } = this.props
    let stringValue=this.props.selectedValue.toString();
    let stringValue2=this.props.selectedValue2.toString();
    let scenarioOptions = dimensionOptions.map(option =>
      {
        let optionValue=option.name;
        if(optionValue==="division_line") {
          return (<MenuSeparatorLine key={option.id} />)
        }
        else {
          return(
            <ScenarioOption
              key={option.id}
              value={optionValue}
              selected={optionValue===stringValue}
              selected2={optionValue===stringValue2}
              onClick={(event) => this.handleChange(event, optionValue)}
              narrowVersion={narrowVersion}
            >
              {narrowVersion===false && option.short_description}
              {narrowVersion===true && option.ultra_short_description}
            </ScenarioOption>
          )
        }
      })
    return (
      <ScenarioList>
        <ScenarioDivider/>
        <ScenarioHeader narrowVersion={narrowVersion}>{dimensionTitle}</ScenarioHeader>
          {scenarioOptions}
      </ScenarioList>
    )
  }
}

ScenarioSelectionList.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any.isRequired,
  selectedValue2: PropTypes.any.isRequired,
  dimensionOptions: PropTypes.array.isRequired,
  dimensionTitle: PropTypes.string.isRequired,
  narrowVersion: PropTypes.bool.isRequired
}

export default ScenarioSelectionList;