import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, withRouter, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import LeftMenu from './leftMenu/LeftMenu'
import LeftMenuMobile from './leftMenu/LeftMenu.mobile'
import Tabs from './tabs/Tabs'
import TabsMobile from './tabs/Tabs.mobile'
import Charts from './charts/Charts'
import ChartsTab2 from './charts/ChartsTab2'
import ChartsTab3 from './charts/ChartsTab3'
import ChartsTab4 from './charts/ChartsTab4'
import ChartsTab5 from './charts/ChartsTab5'
import ChartsTab6 from './charts/ChartsTab6'
import Pages from './pages/pages';
import scenarioCombinations from './data/scenarioCombinations'
import { withNamespaces } from 'react-i18next';

ReactGA.initialize('UA-130272068-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Page = styled.div`
    height: 100%;
    margin: 0px; 
    display: flex;
    box-sizing: border-box;
`
const LeftColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const RightColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Content = styled.div` 
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`
const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const changeScenario = (name, value) => ({
  [name]: value
});

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioSelection: "UDEC_N_PAETT0N_0000I_00-v01",
      scenarioSelection2: "",
      showWelcome: true,
      showDisclaimer: false,
      showDifference: false
    }
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations
  }

  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.any,
    t: PropTypes.any,
    i18n: PropTypes.any
  }

  UpdateScenarioSelection = (e, name, value) => {
    e.preventDefault();
    if(this.state.scenarioSelection2!=="") {
      if(value===this.state.scenarioSelection) {
        this.setState(changeScenario("scenarioSelection", this.state.scenarioSelection2));
        this.setState(changeScenario("scenarioSelection2", ""));
      } else {
        if(value===this.state.scenarioSelection2) {
          this.setState(changeScenario("scenarioSelection2", ""));
        } else {
          this.setState(changeScenario("scenarioSelection2", value));
        }
      }
    } else {
      if(value!==this.state.scenarioSelection) {
        this.setState(changeScenario("scenarioSelection2", value));
      }      
    }
  }

  CloseWelcomeWidget = (event, variable, value) => {
    this.setState({[variable]: value});
  }

  ToggleDifference = (e) => {
    e.preventDefault();
    this.setState({showDifference: !this.state.showDifference});
  }

  render() {
    return (
        <Page>
          <LeftColumn>
            <Content>
              <LeftMenu 
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                toggleDifference={this.ToggleDifference}
                selectedChartgroup={this.props.location.pathname}
              />
              <LeftMenuMobile
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                toggleDifference={this.ToggleDifference}
                selectedChartgroup={this.props.location.pathname}
              />
            </Content>
          </LeftColumn>
          <RightColumn>
            <Content>
              <Tabs selectedChartgroup={this.props.location.pathname} />
              <TabsMobile selectedChartgroup={this.props.location.pathname} />
              <MainSwitch>
                <Route exact path='/' render={()=><Charts 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/tab2' render={()=><ChartsTab2 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/tab3' render={()=><ChartsTab3 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/tab4' render={()=><ChartsTab4
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/tab5' render={()=><ChartsTab5 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/tab6' render={()=><ChartsTab6 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>                                                       
                <Route path='/about' render={(props) => <Pages pageToShow="About" />} />
                <Route path='/descriptions' render={(props) => <Pages pageToShow="ScenarioDescriptions" />} />
                <Route path='/recommendations' render={(props) => <Pages pageToShow="Recommendations" />} />
                <Route path='/assumptions' render={(props) => <Pages pageToShow="Assumptions" />} />
                <Route path='/subscribe' render={(props) => <Pages pageToShow="GetUpdates" />} />
              </MainSwitch>
            </Content>
          </RightColumn>
        </Page>
    );
  }
}

export default withRouter(withNamespaces('common')(App));