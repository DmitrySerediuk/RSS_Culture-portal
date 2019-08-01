import React from 'react';
import { Link } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { makeStyles } from '@material-ui/core/styles';

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
        color: '#ffffff'
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

const architectOfTheDay = ({ i18n }) => {
    const classes = useStyles();
    return (
        <Container className={classes.architectOfTheDay}>               
            <Typography  variant="h5" className={classes.title}> 
                {i18n.t`MAIN__AUTOR-OF-THE-DAY--TITLE`}
            </Typography>             
            <Grid container className={classes.container}>
                <Grid item className={classes.infoWrapper}>
                    <Grid item className={classes.item}>
                        <Typography  variant="h6">
                            Mikhail Ivanovich Baklanov
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography  variant="body1">
                            January 30 (February 12) 1914 - January 23, 1990
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Typography  variant="body2">
                            Belarusian Soviet architect. Honored Architect of the Belorussian SSR (1969).
                        </Typography>
                    </Grid>
                    <Grid item  className={classes.item}>
                        <Button variant="contained" color="default">
                            <Link to='/user' className={classes.link}>
                                {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                            </Link>
                        </Button>
                    </Grid>
                </Grid>                    
                <Grid item className={classes.architectImageWrapper}>
                    <img alt="architect" src={`https://grnkvch.github.io/CodeJam-Culture-Portal/static/baklanov-e8c0f280f4b86d29526072e70c9ee431.jpg`} style={{width: '150px'}} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default withI18n()(architectOfTheDay);