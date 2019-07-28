import React from 'react';
import Typography from '@material-ui/core/Typography';
import './participant.css';

const Participant = (props) => {
    const { image, initials, link } = props;
    const styleForInitial = {
        textAlign: 'center',
        margin: '10px 0',
    };

    return (
        <li className="participant">
            <img src={`${image}`} alt="developer" width="150" className="participant-img"/>
            <Typography variant="body1" style={styleForInitial} className="participant-init">
                {initials}
            </Typography>
            <Typography variant="body2" component="p" style={styleForInitial}>
                <a href={`https://github.com/${link}`} className="link github-link">{link}</a>
            </Typography>
        </li>
    )
}

export default Participant;