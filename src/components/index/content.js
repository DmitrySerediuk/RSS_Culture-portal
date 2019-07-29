import React from 'react';
import Description from './description/description';
import AuthorOfTheDay from './authorOfTheDay/authorOfTheDay';
import Team from './team/team';
import Container from '@material-ui/core/Container';
import './content.css';

const Content = () => {
    return (
            <Container maxWidth="md">
                <Description />
                <AuthorOfTheDay />
                <Team />
            </Container>           
    )
}

export default Content;