import React from 'react';
import Description from './description/description';
import ArchtitectOfTheDay from './architectOfTheDay/architectOfTheDay';
import Team from './team/team';
import { Container } from '@material-ui/core';

const Content = () => {
    return (
            <Container maxWidth="md">
                <Description />
                <ArchtitectOfTheDay />
                <Team />
            </Container>           
    )
}

export default Content;