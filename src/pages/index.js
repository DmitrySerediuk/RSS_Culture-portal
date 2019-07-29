import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';
import ArchitectList from "../components/ArchitectList"


const IndexPage = () => (
  <Layout>
    <Trans>Hi people</Trans>
     <ArchitectList/>
  </Layout>
);

export default withLingui()(IndexPage);

