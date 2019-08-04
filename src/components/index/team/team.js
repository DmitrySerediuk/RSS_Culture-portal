import React from 'react';
import { Typography, Container, List } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';
import Participant from './participant';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	team: {
		backgroundColor: theme.palette.background.paper,
        marginTop: '20px',
        padding: '50px 0'
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


const Team = ({ i18n }) => {
    const classes = useStyles();
    const query = graphql`
    query {
        allContentfulTeam {
            nodes {
                name
                lang
                photo
                githubNick
                contribution
            }
        }
    }
    `;
    const teamDataFull = useStaticQuery(query);
    const teamDataFiltered = new dataFilter(teamDataFull.allContentfulTeam.nodes)
        .filterByField({ lang: i18n._language })
        .unique('githubNick');

    const listOfParticipants = teamDataFiltered.data.map(participant => {
        const { photo, name, githubNick,contribution } = participant;
        return <Participant
            key={githubNick}
            image={photo}
            initials={name}
            link={githubNick}
            contribution={contribution}
        />
    });

    return (
        <Container maxWidth="md" className={classes.team}>
                <Typography variant="h4" color="inherit" className={classes.title}>
                    {i18n.t`MAIN__OUR-TEAM`}
                </Typography>
                <List className={classes.participantsList}>
                    {listOfParticipants}
                </List>
        </ Container >
    )
}

export default withI18n()(Team);