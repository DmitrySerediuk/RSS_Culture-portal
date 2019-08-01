import { graphql } from 'gatsby';
import { withLingui } from '@wapps/gatsby-plugin-lingui';

import StartPage from '../components/index';
import 'normalize.css';

import Layout from '../components/layout';
import React, { Component } from 'react';
import 'typeface-roboto';

class indexPage extends Component {

  render() {
    return (
      <Layout>
        <StartPage  />
      </Layout>
    )
  };
}

export default withLingui()(indexPage);

export const query = graphql`
  query($lng: String!, $fallbackLng: String!) {
    locales: allLocale(
      filter: { lng: { in: [$lng, $fallbackLng] }, ns: { eq: "messages" } }
    ) {
      ...LocaleFragment
    }
  }
`;