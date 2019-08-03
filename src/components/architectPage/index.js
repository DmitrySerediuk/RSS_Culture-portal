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
          video
          map {
            map
          }
          photo {
            file {
              url
            }
          }
          works {
            works
          }
          timeline {
            timeline
          }
          gallery {
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
    .unique('name')
    .data[0];



  if (architectDataFiltered === undefined) return false;
  // console.log(architectDataFiltered.timeline.timeline);
  // console.log(JSON.parse(architectDataFiltered.timeline.timeline), 'time');
  // console.log(JSON.parse(architectDataFiltered.map.map),'map');
  // console.log(JSON.parse(architectDataFiltered.works.works),'works');



  return (
    <Container maxWidth="md" className={classes.container}>
      <Content data={architectDataFiltered} />
      {/* <Content data={data[0]} /> */}
    </Container>
  )
}

export default withI18n()(ArchitectSingle);