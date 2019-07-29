import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Header from "../components/header";
import Content from '../components/index/content';
import 'normalize.css';

import Layout from '../components/layout';
import React, { Component, Fragment } from 'react';

class indexPage extends Component {
  render() {
    return (
      <Layout>
        <Trans>Hi people</Trans>
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