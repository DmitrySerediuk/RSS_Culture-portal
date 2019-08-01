import { graphql } from 'gatsby';
import { withLingui } from '@wapps/gatsby-plugin-lingui';

import Content from '../components/index/content';
import 'normalize.css';

import Layout from '../components/layout';
import React, { Component } from 'react';

class indexPage extends Component {

  render() {
    return (
      <Layout>
        <Content />
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