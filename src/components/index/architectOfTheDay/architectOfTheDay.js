import React from 'react';
import { Link } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';

const useStyles = makeStyles(theme => ({
    architectOfTheDay: {
        margin: '50px auto',
        border: '2px solid #263545',
        padding: '0',
        boxSizing: 'border-box'
    },
    container: {
        display: 'flex',
        ['@media (max-width: 768px)']: {
            flexDirection: 'column',
            textAlign: 'center'
        }
    },
    infoWrapper: {
        flex: '1 1',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        padding: '10px 20px',
        backgroundColor: '#263545',
        textTransform: 'capitalize',
        color: '#ffffff',
        ['@media (max-width: 490px)']: {
            textAlign: 'center'
        }
    },
    item: {
        padding: '10px 20px',
        margin: '10px 0',
        ['@media (max-width: 768px)']: {
            margin: '0'
        }
    },
    link: {
        textDecoration: 'none',
        color: '#222222'
    },
    architectImageWrapper: {
        flex: '0 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        ['@media (max-width: 768px)']: {
            order: -1
        }
    }
}));

const architectorOfTheDay = ({ i18n }) => {

    const query = graphql`
       query {
           allContentfulArchitects {
                nodes {
                  birthDate
                  birthPlace
                  description
                  lang
                  name
                  path
                  photo {
                    file {
                        url
                    }
                }
                }
              }
            }
        `;
    const architectDataFull = useStaticQuery(query);
    const architectDataFiltered = new dataFilter(architectDataFull.allContentfulArchitects.nodes)
        .filterByField({ lang: i18n._language })
        .unique('name')
        .randomData('name');

    console.log(architectDataFiltered);
    const classes = useStyles();

    return (
        <Container className={classes.architectOfTheDay}>
            <Typography variant="h5" className={classes.title}>
                {i18n.t`MAIN__AUTOR-OF-THE-DAY--TITLE`}
            </Typography>
            <Grid container className={classes.container}>
                <Grid item className={classes.infoWrapper}>
                    <Grid item className={classes.item}>
                        <Typography variant="h6">
                            {architectDataFiltered.name}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography variant="body1">
                            {architectDataFiltered.birthDate}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography variant="body2">
                            {architectDataFiltered.description}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Button variant="contained" color="default">
                            <Link to={'/user/' + architectDataFiltered.path} className={classes.link}>
                                {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item className={classes.architectImageWrapper}>
                    <img alt={architectDataFiltered.name} src={architectDataFiltered.photo.file.url} width="150" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default withI18n()(architectorOfTheDay);