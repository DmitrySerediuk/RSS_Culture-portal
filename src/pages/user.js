import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';

import Layout from '../components/layout';
import Description from '../components/architectPage/description';
import Timeline from '../components/architectPage/timeline';
import Gallery from '../components/architectPage/gallery/slider';
import Gallery2 from '../components/architectPage/gallery2';
import Video from '../components/architectPage/video/videoContainer';

const ArchitectPage = () => (
  <Layout>
    <Description />
    <Timeline />
    <Gallery />
    <Gallery2 />
    <Video />
  </Layout>
);

export default withLingui()(ArchitectPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
