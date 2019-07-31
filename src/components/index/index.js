import React from 'react';
import Content from './content';
import { Container } from '@material-ui/core';
import background from '../../assets/images/background.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    containerMain: {
        backgroundImage: `url(${background})`, 
        margin: 'auto'
    },
    containerNested: {
        backgroundColor:'#ffffff', 
        margin: 'auto'
    }
}));

const StartPage = () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.containerMain}>
            <Container maxWidth="md" className={classes.containerNested}>
                <Content/>
            </Container>    
        </Container>       
    )
}

export default StartPage;