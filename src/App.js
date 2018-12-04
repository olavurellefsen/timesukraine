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
import TransportCharts from './charts/TransportCharts'
import SupplyCharts from './charts/SupplyCharts'
import About from './pages/About'
import ScenarioDescriptions from './pages/ScenarioDescriptions'
import Recommendations from './pages/Recommendations'
import Assumptions from './pages/Assumptions'
import GetUpdates from './pages/GetUpdates'
import scenarioCombinations from './data/scenarioCombinations'
import { translate } from 'react-i18next';

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
      scenarioSelection: "UDEC_BAU2050_01",
      scenarioSelection2: "",
      showWelcome: true,
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

  CloseWelcomeWidget = () => {
    this.setState({showWelcome: false});
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
              />
              <LeftMenuMobile
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                toggleDifference={this.ToggleDifference}
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
                <Route path='/transport' render={()=><TransportCharts 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/supply' render={()=><SupplyCharts 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>                
                <Route path='/about' component={About} />
                <Route path='/descriptions' component={ScenarioDescriptions} />
                <Route path='/recommendations' component={Recommendations} />
                <Route path='/assumptions' component={Assumptions} />
                <Route path='/subscribe' component={GetUpdates} />
              </MainSwitch>
            </Content>
          </RightColumn>
        </Page>
    );
  }
}

export default withRouter(translate('common')(App));