import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'
import ScenarioSelectionList from '../scenarioSelection/ScenarioSelectionList'
import ToggleSwitch from './ToggleSwitch'

const MenuLayout = styled.div`
  display: none;
  ${breakpoint('mobile','desktop')`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 80px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
  `;
  MenuLayout.displayName = 'MenuLayout';
const MenuHeader =  styled(Link)`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  text-decoration: none;
  color:white;
  `;
  MenuHeader.displayName = 'MenuHeader';
const MenuSeparatorLine  = styled.hr`
  margin: 0.25em 12px 0.25em 5px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
  `;
  MenuSeparatorLine.displayName = 'MenuSeparatorLine';
const MenuRoutes  = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  MenuRoutes.displayName = 'MenuRoutes';
const MenuItem  = styled(Link)`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  font-size: 0.7em;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${props => (props.selected ? 'yellow' : 'inherit')};
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  `;
  MenuItem.displayName = 'MenuItem';
const ScenarioSelection  = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  `;
  ScenarioSelection.displayName = 'ScenarioSelection';
const ToggleDifference = styled.div`
  padding: 5px;
  display: flex;
  justify-content:start;
  align-content:center;
  flex-direction: column;
  `;
  ToggleDifference.displayName = 'ToggleDifference';
const ToggleSwitchText = styled.div`
  font-size: 0.7em;
  color: ${props => (props.singleMode ? 'gray' : props.selected ? '#2196F3' : 'white')};
  margin-top: 5px;
  `;
  ToggleSwitchText.displayName = 'ToggleSwitchText';
const MenuFooter  = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  MenuFooter.displayName = 'MenuFooter';
const CopyrightNotice = styled.div`
  font-size: 0.7em;
  padding: 5px;
  margin: 0;
  width: 100%;
  `;
  CopyrightNotice.displayName = 'CopyrightNotice';
const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  `;
  ExternalLink.displayName = 'ExternalLink';

class ScenarioSelectionMenu extends React.Component {

  render() {
    return (
      <MenuLayout>
        <MenuHeader to='/'>
          Times Ukraine
        </MenuHeader>
        <MenuRoutes>
          <MenuItem to='/about'>About</MenuItem>
          <MenuItem to='/descriptions'>Descriptions</MenuItem>
          <MenuItem to='/recommendations'>Recommend.</MenuItem>
          <MenuItem to='/assumptions'>Assumptions</MenuItem>
          <MenuItem to='/subscribe'>Subscribe</MenuItem>
        </MenuRoutes>
        <MenuSeparatorLine />        
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={this.props.updateScenarioSelection}
            name='scenarioSelection'
            selectedValue={this.props.scenarioSelection.scenarioSelection}
            selectedValue2={this.props.scenarioSelection.scenarioSelection2}
            dimensionOptions={this.props.scenarioCombinations.scenarioOptions}
            dimensionTitle='Scenarios'
            narrowVersion={true}
          />
        </ScenarioSelection>
        <MenuSeparatorLine />        
        <ToggleDifference onClick={(e) => this.props.toggleDifference(e)}>
          <ToggleSwitch
            dimmed={this.props.scenarioSelection.scenarioSelection2===""}
            checked={this.props.scenarioSelection.showDifference}
          />
          <ToggleSwitchText
            singleMode={this.props.scenarioSelection.scenarioSelection2===""}
            selected={this.props.scenarioSelection.showDifference}
          >Scenario difference</ToggleSwitchText>
        </ToggleDifference>
        <MenuSeparatorLine />        
        <MenuFooter>
          <CopyrightNotice>
            <ExternalLink href='http://www.tokni.com'>Developed by Tokni</ExternalLink>
          </CopyrightNotice>
        </MenuFooter>
      </MenuLayout>
    );
  }
}

ScenarioSelectionMenu.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  scenarioSelection: PropTypes.object.isRequired,
  scenarioCombinations: PropTypes.object.isRequired,
  toggleDifference: PropTypes.func.isRequired,
}

export default ScenarioSelectionMenu;