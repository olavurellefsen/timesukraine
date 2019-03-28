import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'
import ScenarioSelectionList from '../scenarioSelection/ScenarioSelectionList'
import ToggleSwitch from './ToggleSwitch'
import { Trans, withNamespaces } from 'react-i18next';

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

const MenuHeader =  styled.div`
  padding: 10px 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  `;

const MenuHeaderLeft = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  `;

  const MenuHeaderRight = styled.div`
  padding: 0 12px 5px 0px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  `;

const AppLogo  = styled.img`
  width: 54px;
  height: 85px;
  margin-left: 20px;
  border: 0;
  `;

const ModelersLogo  = styled.img`
  align-self: flex-start;
  width: 80px;
  border-style: solid;
  border-width: 10px;
  border-color: white;
  margin-bottom: 20px;
  `;

const MenuPages =  styled.div`
  padding: 0px 12px 5px 0px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: space-between;
  `;

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

const LanguageGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 20px;
  `;

const LanguageButton = styled.button`
  margin-right: 5px;
  cursor: pointer;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  box-shadow: ${props => (props.selected ? '0 3px 5px gray': 'normal')}
  `; 

const MenuSeparatorLine  = styled.hr`
  margin: 0.25em 12px 0.25em 15px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
  `;

const MenuRoutes  = styled.div`
  padding: 10px 12px 15px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const MenuItem  = styled(Link)`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  font-size: 0.9em;
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

const ScenarioSelection  = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  `;

const ToggleDifference = styled.div`
  padding: 15px;
  display: flex;
  justify-content:start;
  align-content:center;
  `;

const ToggleSwitchText = styled.div`
  color: ${props => (props.singleMode ? 'gray' : props.selected ? '#2196F3' : 'white')};
  margin-left: 10px;
  `;

const MenuFooter  = styled.div`
  padding: 15px 12px 5px 15px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const CopyrightNotice = styled.div`
  padding: 0 12px 5px 15px;
  margin: 0;
  width: 100%;
  heigth: 26px;
  `;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  `;

export class ScenarioSelectionMenu extends React.Component {

  render() {
    const { i18n } = this.props;
    return (
      <MenuLayout>
        <MenuHeader>
          <MenuHeaderLeft>
            <AppLogo src='./images/dtulogo_white.png' alt='logo'/>
          </MenuHeaderLeft>
          <MenuHeaderRight>
            <ModelersLogo src='images/times-ukraine-modellers.gif' />
          </MenuHeaderRight>
        </MenuHeader>
        <MenuPages>
        <MenuTitle to='/'>
            <Trans i18nKey='main-menu.times-ukraine' />
            </MenuTitle>
            <LanguageGroup>
              <LanguageButton selected={i18n.languages[0]==='uk'} onClick={() => i18n.changeLanguage('uk')}>UK</LanguageButton>
              <LanguageButton selected={i18n.languages[0]==='en'} onClick={() => i18n.changeLanguage('en')}>EN</LanguageButton>
            </LanguageGroup>
            <MenuRoutes>
              <MenuItem to='/about' selected={this.props.selectedChartgroup==='/about'}><Trans i18nKey='main-menu.about-the-tool' /></MenuItem>
              <MenuItem to='/descriptions' selected={this.props.selectedChartgroup==='/descriptions'}><Trans i18nKey='main-menu.scenario-descriptions' /></MenuItem>
              <MenuItem to='/recommendations' selected={this.props.selectedChartgroup==='/recommendations'}><Trans i18nKey='main-menu.recommendations' /></MenuItem>
              <MenuItem to='/assumptions' selected={this.props.selectedChartgroup==='/assumptions'}><Trans i18nKey='main-menu.assumptions' /></MenuItem>
              <MenuItem to='/subscribe' selected={this.props.selectedChartgroup==='/subscribe'}><Trans i18nKey='main-menu.subscribe-to-updates' /></MenuItem>              
            </MenuRoutes>
        </MenuPages>
        <MenuSeparatorLine />        
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={this.props.updateScenarioSelection}
            name='scenarioSelection'
            selectedValue={this.props.scenarioSelection.scenarioSelection}
            selectedValue2={this.props.scenarioSelection.scenarioSelection2}
            dimensionOptions={this.props.scenarioCombinations.scenarioOptions}
            dimensionTitle={this.props.t('main-menu.scenarios', { framework: "react-i18next" })}
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
          ><Trans i18nKey='main-menu.scenario-difference' /></ToggleSwitchText>
        </ToggleDifference>
        <MenuSeparatorLine />
        <MenuFooter>
          <CopyrightNotice>
            <ExternalLink href='http://www.tokni.com'><Trans i18nKey='main-menu.online-version-from-tokni' /></ExternalLink>
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
  selectedChartgroup: PropTypes.any,
  i18n: PropTypes.any,
  t: PropTypes.any
}

export default withNamespaces('common')(ScenarioSelectionMenu);