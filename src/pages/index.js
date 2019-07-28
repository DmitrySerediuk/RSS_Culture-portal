import React from 'react';
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
// import { I18nextProvider } from 'react-i18next';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    hello
  </Layout>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;