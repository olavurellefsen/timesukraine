import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import { Trans } from 'react-i18next';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
  AboutHeader.displayName = 'AboutHeader'
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}
  `
export default () => (
  <AboutContainer>
    <AboutHeader><Trans i18nKey='main-menu.about-the-tool' /></AboutHeader>
	<AboutBody><Trans i18nKey='tool.text' /></AboutBody>
    <AboutBody><Link to='/'><Trans i18nKey='pages.to-the-front-page' /></Link></AboutBody>
    <AboutHeader2></AboutHeader2>
  </AboutContainer>
)