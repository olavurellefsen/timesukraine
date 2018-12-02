import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'
import ScenarioSelectionList from '../scenarioSelection/ScenarioSelectionList'
import ToggleSwitch from './ToggleSwitch'

const MenuLayout = styled.div`
  display: none;
  ${breakpoint('desktop')`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 220px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
  `;
  MenuLayout.displayName = 'MenuLayout';
const MenuHeader =  styled.div`
  padding: 10px 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  `;
  MenuLayout.displayName = 'MenuLayout';
const MenuHeaderLeft = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  `;
  MenuHeaderLeft.displayName = 'MenuHeaderLeft';
const MenuHeaderRight = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  `;
  MenuHeaderRight.displayName = 'MenuHeaderRight';
const AppLogo  = styled.img`
  width: 45px;
  height: 67px;
  margin-left: 5px;
  border: 0;
  `;
  AppLogo.displayName = 'AppLogo';
const MenuTitle  = styled(Link)`
  font-weight: bold;
  font-size: 1.25em;
  padding: 0px 0px 5px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  `;
  MenuTitle.displayName = 'MenuTitle';
const MenuSeparatorLine  = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
  `;
  MenuSeparatorLine.displayName = 'MenuSeparatorLine';
const MenuRoutes  = styled.div`
  padding: 10px 12px 15px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  MenuRoutes.displayName = 'MenuRoutes';
const MenuItem  = styled(Link)`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  font-size: 1em;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.selected ? 'yellow' : 'inherit')};
  `;
  MenuItem.displayName = 'MenuItem';
const ScenarioSelection  = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  `;
  ScenarioSelection.displayName = 'ScenarioSelection';
const ToggleDifference = styled.div`
  padding: 15px;
  display: flex;
  justify-content:start;
  align-content:center;
  `;
  ToggleDifference.displayName = 'ToggleDifference';
const ToggleSwitchText = styled.div`
  color: ${props => (props.singleMode ? 'gray' : props.selected ? '#2196F3' : 'white')};
  margin-left: 10px;
  `;
  ToggleSwitchText.displayName = 'ToggleSwitchText';
const MenuFooter  = styled.div`
  padding: 15px 12px 5px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  MenuFooter.displayName = 'MenuFooter';
const CopyrightNotice = styled.div`
  padding: 0 12px 5px 15px;
  margin: 0;
  width: 100%;
  heigth: 26px;
  `;
  MenuLayout.displayName = 'MenuLayout';
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
        <MenuHeader>
          <MenuHeaderLeft>
            <MenuTitle to='/'>
              TIMES Ukraine
            </MenuTitle>
            <MenuRoutes>
              <MenuItem to='/about' selected={this.props.selectedChartgroup==='/about'}>About the tool</MenuItem>
              <MenuItem to='/descriptions' selected={this.props.selectedChartgroup==='/descriptions'}>Scenario Descriptions</MenuItem>
              <MenuItem to='/recommendations' selected={this.props.selectedChartgroup==='/recommendations'}>Recommendations</MenuItem>
              <MenuItem to='/assumptions' selected={this.props.selectedChartgroup==='/assumptions'}>Assumptions</MenuItem>
              <MenuItem to='/subscribe' selected={this.props.selectedChartgroup==='/subscribe'}>Subscribe to updates</MenuItem>              
            </MenuRoutes>
          </MenuHeaderLeft>
        </MenuHeader>
        <MenuSeparatorLine />        
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={this.props.updateScenarioSelection}
            name='scenarioSelection'
            selectedValue={this.props.scenarioSelection.scenarioSelection}
            selectedValue2={this.props.scenarioSelection.scenarioSelection2}
            dimensionOptions={this.props.scenarioCombinations.scenarioOptions}
            dimensionTitle='Scenarios'
            narrowVersion={false}
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
            <ExternalLink href='http://www.tokni.com'>Online version from Tokni</ExternalLink>
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
  selectedChartgroup: PropTypes.any
}

export default ScenarioSelectionMenu;