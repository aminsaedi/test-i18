import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import en from './compiled-lang/en.json';
import fr from './compiled-lang/fr.json';
import fa from './compiled-lang/fa.json';

function loadLocaleData(locale) {
  switch (locale) {
    case 'fr':
      return fr;
    case 'fa':
      return fa;
    default:
      return en;
  }
}

export default function LocalProvider({ children }) {
  const locale = useSelector((state) => state.lang.lang);
  const messages = loadLocaleData(locale);
  const direction = locale === 'fa' ? 'rtl' : 'ltr';
  return (
    <IntlProvider defaultLocale="en" key={locale} messages={messages} locale={locale}>
      <div style={{ direction }}>
        {children}
      </div>
    </IntlProvider>
  );
}

LocalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
