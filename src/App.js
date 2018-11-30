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
import Prerequisites from './pages/Prerequisites'
import GetUpdates from './pages/GetUpdates'
import scenarioCombinations from './data/scenarioCombinations'

ReactGA.initialize('UA-127032810-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Page = styled.div`
    height: 100%;
    margin: 0px; 
    display: flex;
    box-sizing: border-box;
`
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Content = styled.div` 
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
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
      scenarioSelection: "DTU_ea18_fp",
      scenarioSelection2: "",
      showWelcome: true,
      showDifference: false
    }
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations
  }

  static propTypes = {
    history: PropTypes.object,
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
          <Column>
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
          </Column>
          <Column>
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
                <Route path='/forsyning' render={()=><SupplyCharts 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>                
                <Route path='/about' component={About} />
                <Route path='/beskrivelser' component={ScenarioDescriptions} />
                <Route path='/anbefalinger' component={Recommendations} />
                <Route path='/forudsaetninger' component={Prerequisites} />
                <Route path='/abonner' component={GetUpdates} />
              </MainSwitch>
            </Content>
          </Column>
        </Page>
    );
  }
}

export default withRouter(App)