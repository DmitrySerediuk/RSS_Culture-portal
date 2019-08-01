import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';
import Participant from './participant';

import './team.css';

const Team = ({ i18n }) => {
    const query = graphql`
    query {
        allContentfulTeam {
            nodes {
                name
                lang
                photo
                githubNick
            }
        }
    }
    `;
    const teamDataFull = useStaticQuery(query);
    const teamDataFiltered = new dataFilter(teamDataFull.allContentfulTeam.nodes)
        .filterByLang({ lang: i18n._language })
        .unique('githubNick');

    const listOfParticipants = teamDataFiltered.data.map(participant => {
        const { photo, name, githubNick } = participant;
        return <Participant
            key={githubNick}
            image={photo}
            initials={name}
            link={githubNick}
        />
    });

    return (
        < Container >
            <div className="team">
                <Typography variant="h4" color="inherit" style={{ textAlign: 'center' }}>
                    {i18n.t`MAIN__OUR-TEAM`}
                </Typography>
                <ul className="participants-list">
                    {listOfParticipants}
                </ul>
            </div>
        </ Container >
    )
}

export default withI18n()(Team);