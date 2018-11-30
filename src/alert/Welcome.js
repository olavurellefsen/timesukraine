import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Octicon from 'react-octicon'

const AlertContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: blue;
  border-style: solid;
  background-color: mintcream;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: row;
  `
  AlertContainer.displayName = 'AlertContainer'
const AlertBody = styled.div`
  font-size: 1em;
  margin: 0px;
  align-self: center;
  flex: 1;
  `
  AlertBody.displayName = 'AlertBody'
const AlertBodyParagraph = styled.p`
  `
  AlertBodyParagraph.displayName = 'AlertBodyParagraph'
const CloseWindowIcon = styled.div`
  margin: 0px;
  border: 0;
  flex-shrink: 0;
  align-self: flex-start;
  :hover {
    cursor: pointer;
  }
  `
  CloseWindowIcon.displayName = 'CloseWindowIcon'

const Welcome = (props) => (
  <AlertContainer>
    <AlertBody>
      <AlertBodyParagraph>
        With this tool you can explore a number of scenarios related to the TIMES Ukraine energy model.
        Select a scenario in the left hand menu and review the results in the charts below.
      </AlertBodyParagraph>
    </AlertBody>
    <CloseWindowIcon onClick={(event) => props.closeWelcome(event, 'showWelcome', false)}>
      <Octicon name='x' />
    </CloseWindowIcon>
  </AlertContainer>
)

Welcome.propTypes = {
  closeWelcome: PropTypes.func.isRequired
}

export default Welcome