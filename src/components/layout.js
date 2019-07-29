import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from '@lingui/react';
import { Head } from '@wapps/gatsby-plugin-lingui';

import Header from './header';

const Layout = ({ children, i18n }) => (
  <>
    <Head hreflang>
      <title>{i18n.t`Gatsby Starter Lingui`}</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="gatsby, react, wapps, lingui" />
    </Head>
    <Header siteTitle={i18n.t`Gatsby Starter Lingui`} />
    <div>
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withI18n()(Layout);
