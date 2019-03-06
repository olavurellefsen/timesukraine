import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_uk from "./translations/uk/common.json";
import common_en from "./translations/en/common.json";

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

const render = Component => {
  ReactDOM.render(
    <I18nextProvider i18n={i18next}>
      <Component />
    </I18nextProvider>,
    document.getElementById('root'),
  )
}

render(Root)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
