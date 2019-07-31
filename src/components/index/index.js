import React from 'react';
import Content from './content';
import { Container } from '@material-ui/core';

const StartPage = () => {
    return (
        <Container maxWidth="md" style={{ backgroundColor:'#ffffff', margin: 'auto'}}>
            <Content/>
        </Container>         
    )
}

export default StartPage;