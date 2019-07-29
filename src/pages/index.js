import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Trans>Hi people</Trans>
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