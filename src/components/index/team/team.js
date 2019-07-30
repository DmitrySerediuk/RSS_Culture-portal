import React from 'react';
import Participant from './participant';
import { Typography, Container, List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	team: {
		backgroundColor: theme.palette.background.paper,
        margin: '20px 0',
        padding: '0'
    },
    participantsList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridTemplateRows: 'auto',
        gridGap: '20px',
        padding: '0'
    },
    title: {
        textAlign: 'center',
		margin: '20px 0'
    }
}));

const Team = () => {
    const classes = useStyles();
    const participants = [
        {
            id: 1,
            image: 'https://avatars3.githubusercontent.com/u/40882911?s=460&v=4',
            initials: 'Dmitry Serediuk',
            link: 'k0smm0s',
        },
        {
            id: 2,
            image: 'https://avatars1.githubusercontent.com/u/47710682?s=460&v=4',
            initials: 'Aliaksei Yukhnevich',
            link: 'alexyukhnevich',
        },
        {   
            id: 3,
            image: 'https://avatars0.githubusercontent.com/u/43389428?s=460&v=4',
            initials: 'Bogdan Tsviatkou',
            link: 'getbodya',
        },
        {   
            id: 4,
            image: 'https://avatars1.githubusercontent.com/u/22011726?s=460&v=4',
            initials: 'Konstantin Krylovich',
            link:'konstantinkrylovich',
        },
        {   
            id: 5,
            image: 'https://avatars3.githubusercontent.com/u/22956432?s=460&v=4',
            initials: 'Maria Larchenko',
            link: 'MashaLarchenko',
        }
    ];
    // Create a list of developers
    const listOfParticipants = participants.map(participant => {
        const {id, image, initials, link} = participant;
        return <Participant 
                    key={id}
                    image={image}
                    initials={initials}
                    link={link}
                />
        });

    return (
        <Container maxWidth="md" className={classes.team}>
            <Typography variant="h4" color="inherit" className={classes.title}>
                Our team
            </Typography>
            <List className={classes.participantsList}>
                {listOfParticipants}
            </List>
        </ Container>
    )
}

export default Team;