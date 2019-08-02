import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { withLingui } from '@wapps/gatsby-plugin-lingui';

import ArchitectSingle from '../components/architectPage';

const ArchitectPage = (...args) => {
  return (
    <Layout>
      <ArchitectSingle path={args[0].path} />
    </Layout>
  )
};

export default withLingui()(ArchitectPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
