import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "styled-components-breakpoint";
import { Trans, withNamespaces } from "react-i18next";
import Markdown from "markdown-to-jsx";

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;

const AboutBody = styled.p`
  padding: 10px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
`;

class ScenarioDescriptions extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: '' };
  }

  updateLanguage = () => {
    const { i18n, pageToShow } = this.props;
    fetch("pages/"+pageToShow+"." + i18n.languages[0] + ".md")
      .then(response => response.text())
      .then(text => {
        this.setState({ terms: text });
      });
  };

  componentWillMount() {
    this.updateLanguage();
  }

  componentWillUpdate() {
    this.updateLanguage();
  }

  render() {
    return (
      <AboutContainer>
        <Markdown>{this.state.terms}</Markdown>
        <AboutBody>
          <Link to="/">
            <Trans i18nKey="pages.to-the-front-page" />
          </Link>
        </AboutBody>
      </AboutContainer>
    );
  }
}

ScenarioDescriptions.propTypes = {
  pageToShow: PropTypes.string,
  i18n: PropTypes.any
};

export default withNamespaces("common")(ScenarioDescriptions);
