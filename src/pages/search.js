import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { withLingui } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import SearchPage from "../components/searchPage"


const IndexPage = () => (
  <Layout>
    <SearchPage />    
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
