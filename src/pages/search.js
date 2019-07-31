import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { withLingui } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import SearchPage from "../components/searchPage"
// import { Search } from '@material-ui/icons';


const IndexPage = () => (
  <Layout>
    <Container maxWidth="md" style={{background: '#ffffff', margin: 'auto', padding: '20px 0'}}> 
      <Typography variant='h5' align="center" >
        <Trans>SEARCH__TITLE</Trans>
      </Typography> 
      <SearchPage />
    </Container>     
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
