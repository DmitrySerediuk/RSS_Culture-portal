import React, { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    paragraph: {
        margin: '1rem 0',
        textIndent: '2rem',
        textAlign: 'justify'
    },
}));

const Description = ({ i18n }) => {
    const classes = useStyles();
    const query = graphql`
    query {
        allContentfulMainPage {
            nodes {
              lang
              title
              text {
                text
              }
              multiText {
                multiText
              }
            }
          }
    }
    `;
    const mainDataFull = useStaticQuery(query);
    const mainDataFiltered = new dataFilter(mainDataFull.allContentfulMainPage.nodes)
        .filterByField({ lang: i18n._language })
        .unique('title');

    return (
        <Fragment>
            <Container maxWidth='md'>
                <Typography variant="h5" color="inherit" className={classes.title}>
                    {mainDataFiltered.data[0].title}
                </Typography>
                <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    {mainDataFiltered.data[0].text.text}
               </Typography>

            </Container>
        </ Fragment>
    )
}

// export default Description;
export default withI18n()(Description);