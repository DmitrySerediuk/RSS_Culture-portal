import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Header from "../components/header";
import Content from '../components/index/content';
import 'normalize.css';

import Layout from '../components/layout';
import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";


//const IndexPage = () => (
//  <Layout>
//    <Trans>Hi people</Trans>
//  </Layout>
//);

class indexPage extends Component {
  render() {
    const { lang } = this.props.pageContext;
    return (
      <Fragment>
          <Header lang={lang} />
          <Content />
      </Fragment>
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