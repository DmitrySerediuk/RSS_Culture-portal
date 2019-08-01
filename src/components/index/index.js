import React from 'react';
import Content from './content';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: { 
        backgroundColor:'#ffffff',
        margin: 'auto', 
        width: '85%', 
        minHeight: '100vh'
    }
}));
const StartPage = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.container}>
            <Content/>
        </Container>         
    )
}

export default StartPage;