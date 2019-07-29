import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>
      <Trans>Hi people</Trans>
    </h1>
    <p>
      <Trans>Welcome to your new Gatsby site.</Trans>
    </p>
    <p>
      <Trans>Now go build something great.</Trans>
    </p>
    <Link to="/search/">
      <Trans>Go to page 2</Trans>
    </Link>
  </Layout>
);

export default withLingui()(IndexPage);

export const query = graphql`
  query($lng: String!, $fallbackLng: String!) {
    locales: allLocale(
      filter: { lng: { in: [$lng, $fallbackLng] }, ns: { eq: "messages" } }
    ) {
      ...LocaleFragment
    }
  }
`;
