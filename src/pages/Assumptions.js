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
  margin-bottom: 5px;
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutTable = styled.table`
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 275px;
    font-size: 0.7em;
  `}  
  `
const TableCaption = styled.caption`
  margin-top: 20px;
  padding-bottom: 12px;
  font-weight: bold;
  font-style: italic;
  `
const TableHeader = styled.th`
    text-align: left;
  `  
const TableData = styled.td`
  padding: 5px;
  `
const AboutImage = styled.img`
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 250px;
    max-height: 142px;
  `}  
  `

export default () => (
  <AboutContainer>
    <AboutHeader><Trans i18nKey='main-menu.assumptions' /></AboutHeader>
    <AboutBody><Link to='/'><Trans i18nKey='pages.to-the-front-page' /></Link></AboutBody>
    <AboutHeader2 /><AboutTable /><TableCaption /><TableHeader /><TableData /><AboutImage />
  </AboutContainer>
)
