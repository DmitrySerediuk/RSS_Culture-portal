import React from 'react';

import { Container } from '@material-ui/core';
import Content from './content';
import { makeStyles } from '@material-ui/core/styles';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../dataFilter';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#ffffff',
    margin: 'auto',
    width: '85%',
    minHeight: '100vh',
    paddingTop: '24px',
    paddingBottom: '24px'
  }
}));

const ArchitectSingle = ({ i18n, path }) => {
  const classes = useStyles();
  const data = [
    {
      imageSrc: "https://grnkvch.github.io/CodeJam-Culture-Portal/static/baklanov-e8c0f280f4b86d29526072e70c9ee431.jpg",
      initials: 'Mikhail Ivanovich Baklanov',
      yearsOfLife: 'January 30 (February 12) 1914 - January 23, 1990',
      desc: 'Belarusian Soviet architect. Honored Architect of the Belorussian SSR (1969)',
      works: [
        {
          masterpiece: 'National Art Museum of the Republic of Belarus',
          year: '-'
        },
        {
          masterpiece: 'National Academic Drama Theater. M. Gorky (reconstruction)',
          year: '1948—1950'
        },
        {
          masterpiece: 'Building of the Minsk Regional Statistical Office)',
          year: '1954'
        },
        {
          masterpiece: 'National Art Museum of the Republic of Belarus',
          year: '1957'
        },
        {
          masterpiece: 'Educational buildings of the medical institute',
          year: '1966'
        },
        {
          masterpiece: 'Main building, building of radiophysics and electronics of the Belarusian State University',
          year: '1966'
        }
      ],
      timeline: [
        {
          year: '1932',
          desc: 'After graduating from the school of factory education, he worked as a draftsman at the Donetsk Metallurgical Plant. In 1932, M. Baklanov began studying at the Kharkov Architectural and Construction College.'
        },
        {
          year: '1936',
          desc: 'Entered the Kharkov Institute of Civil Engineering (now Kharkov National University of Construction and Architecture). However, I did not finish my studies.'
        },
        {
          year: '1940',
          desc: 'In December 1940, from the 4th year, he was drafted into the army, and soon he was sent to the 17th separate division of aerostat barrage near the city of Bialystok.'
        },
        {
          year: '1941 - 1943',
          desc: 'At the beginning of World War II, Private Cormorant fought with the Nazis, but in July 1941 he was captured. Until 1943 he was in prison camps in Poland. In March, he fled and soon after that joined the People\'s Avengers partisan brigade. For active participation in the battles with the occupiers, he was awarded the medal "Partisan of the Patriotic War" I degree.'
        },
        {
          year: '1944 - 1990',
          desc: 'For 36 years, the working biography of the architect was associated with this institution. Here he went from an ordinary architect to the head of an architectural design workshop. After retirement he became interested in painting, copied works of Russian artists of the second half of the XIX century.'
        }
      ],
      url: `https://www.youtube.com/watch?time_continue=6&v=6mUgWtHkQFY`
    }
  ];

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

  // const descriptionData = {
  //  fullName: architectDataFiltered.data[0].name,
  //  yearsOfLife: architectDataFiltered.data[0].birthDate,
  //  imageUrl: architectDataFiltered.data[0].tmp.file.url,
  //  description: architectDataFiltered.data[0].description
  // };

  // const timelineData = architectDataFiltered.data[0].timeline;
  // const galleryData = architectDataFiltered.data[0]; // gallery
  // const videoData = architectDataFiltered.data[0].video;
  // const mapData = architectDataFiltered.data[0].mapData.map;

  return (
    <Container maxWidth="md" className={classes.container}>
      {/* <Content data={architectDataFiltered.data[0]}/> */}
      <Content data={data[0]} />
    </Container>
  )
}

export default withI18n()(ArchitectSingle);