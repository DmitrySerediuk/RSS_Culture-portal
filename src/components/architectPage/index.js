import React from 'react';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import MapComponent from './MapComponent'
import Description from './description';
import Timeline from './timeline';
import Gallery from './gallery/slider';
import Gallery2 from './gallery2';
import Video from './video/videoContainer';

import dataFilter from '../dataFilter';


const ArchitectSingle = ({ i18n, path }) => {
  const queryArch = graphql`
       query {
           allContentfulArchitects {
                nodes {
                  birthDate
                  birthPlace
                  description
                  lang
                  name
                  path
                  timeline {
                    timeline
                  }
                  mapData {
                    map
                  }
                  video
                  tmp {
                    file {
                      url
                    }
                  }
                }
              }
            }
  			`;

  const pathToFilter = path.split('/').reverse()[0];
  const architectDataFull = useStaticQuery(queryArch);
  const architectDataFiltered = new dataFilter(architectDataFull.allContentfulArchitects.nodes)
    .filterByField({ lang: i18n._language })
    .filterByField({ path: pathToFilter })
    .unique('name');

  console.log(architectDataFiltered);

  const descriptionData = {
    fullName: architectDataFiltered.data[0].name,
    yearsOfLife: architectDataFiltered.data[0].birthDate,
    imageUrl: architectDataFiltered.data[0].tmp.file.url,
    description: architectDataFiltered.data[0].description
  };

  const timelineData = architectDataFiltered.data[0].timeline;
  const galleryData = architectDataFiltered.data[0]; // gallery
  const videoData = architectDataFiltered.data[0].video;
  const mapData = architectDataFiltered.data[0].mapData.map;

  return (
    <>
      <Description data={descriptionData} />
      <Timeline data={timelineData} />
      <Gallery data={galleryData} />
      <Gallery2 data={galleryData} />
      <Video data={videoData} />
      <MapComponent data={mapData} />
    </>
  )
};

export default withI18n()(ArchitectSingle);
