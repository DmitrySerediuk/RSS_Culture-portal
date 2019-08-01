import React from 'react';
import { withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';
import ArchitectSingle from '../components/architectPage';

import { useStaticQuery, graphql } from 'gatsby';


const ArchitectPage = (...args) => {
  console.log('first', args);
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
