import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from '@lingui/react';
import { Head } from '@wapps/gatsby-plugin-lingui';

import Header from './header';

const Layout = ({ children, i18n }) => (
  <>
    <Head hreflang>
      <title>{i18n.t`TITLE__MAIN`}</title>
      <meta name="description" content={i18n.t`DESCRIPTION__MAIN`} />
      <meta name="keywords" content={i18n.t`KEYWORDS__MAIN`} />
    </Head>
    <Header siteTitle={i18n.t`TITLE__MAIN`} />
    <div>
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withI18n()(Layout);
