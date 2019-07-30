import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';
import ArchitectList from "../components/architectList"


const IndexPage = () => (
  <Layout>
    <h1>
      <Trans>SEARCH__TITLE</Trans>
    </h1>

    <ArchitectList />
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
