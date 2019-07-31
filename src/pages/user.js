import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';
import ArchitectPage from '../components/architectPage';

const SecondPage = () => (
  <Layout>
    <ArchitectPage />
    <div>Hey </div>
    <Link to="/">
      <Trans>Go back to the homepage</Trans>
    </Link>
  </Layout>
);

export default withLingui()(SecondPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
