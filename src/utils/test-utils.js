import React from 'react';
import PropTypes from "prop-types";
import { render } from "react-testing-library";
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_uk from "../translations/uk/common.json";
import common_en from "../translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'uk',
  defaultNS: 'common',
  resources: {
    en: {
      common: common_en
    },
    uk: {
      common: common_uk
    },
  },
});

const AllTheProviders = ({ children }) => (
  <BrowserRouter><I18nextProvider i18n={i18next}>{children}</I18nextProvider></BrowserRouter>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };

AllTheProviders.propTypes = {
  children: PropTypes.any
};