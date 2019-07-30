import React from 'react';
import { Link } from 'gatsby';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    architectOfTheDay: {
        margin: '50px auto',
        border: '2px solid #3c65be',
        padding: '0',
        boxSizing: 'border-box'
    },
    infoWrapper: {
        flex: '1 1',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        padding: '10px 20px',
        backgroundColor: '#3c65be',
        textTransform: 'capitalize',
        color: '#ffffff'
    },
    item: {
        padding: '10px 20px',
        margin: '10px 0'
    },
    link: {
        textDecoration: 'none',
        color: '#222222'
    },
    architectImageWrapper: {
        flex: '0 1',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem'
    }
}));

const architectOfTheDay = (props) => {
    const classes = useStyles();
    const { imageSrc,  initials,  yearsOfLife,  desc} = props.architectOfTheDay;
    return (
            <Container className={classes.architectOfTheDay}>               
                <Typography  variant="h5" className={classes.title}> 
                    Architect of the day
                </Typography>             
                <Grid container>
                    <Grid item className={classes.infoWrapper}>
                        <Grid item className={classes.item}>
                            <Typography  variant="h6">
                               {initials}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Typography  variant="body1">
                               {yearsOfLife}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Typography  variant="body2">
                               {desc}
                            </Typography>
                        </Grid>
                        <Grid item  className={classes.item}>
                            <Button variant="contained" color="default">
                                <Link to='./user' className={classes.link}>
                                    Go to page
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>                    
                    <Grid item className={classes.architectImageWrapper}>
                        <img alt="architect" src={imageSrc} style={{width: '150px'}} />
                    </Grid>
                </Grid>
        </Container>
    )
}

export default architectOfTheDay;