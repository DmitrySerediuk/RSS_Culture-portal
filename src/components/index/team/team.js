import React from 'react';
import Participant from './participant';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './team.css';

const Team = () => {
    // Need to put in data
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
        <Container>
            <div className="team">
                <Typography variant="h4" color="inherit" style={{textAlign: 'center'}}>
                    Our team
                </Typography>
                <ul className="participants-list">
                     {listOfParticipants}
                </ul>
            </div>
        </ Container>
    )
}
export default Team;