import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    participant: {
        display: 'flex',
        flexFlow: 'column wrap',
        listStyle: 'none',
        justifyContent: 'center',
        padding: '0',
        boxShadow: 'inset 2px 2px 4px #000000, inset -2px -2px 4px #000000'
    },
    participantPic: {
        boxSizing: 'border-box',
        width: '150px',
        height: '150px',
        borderRadius: '0',
        margin: '0',
        padding: '0'
    },
    participantInit: {
        textAlign: 'center',
        margin: '5px 0'
    },  
    githubLink: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: '#3c6cee',
        textDecoration: 'none',
        padding: '0, 0.1vw'
    }
}));


const Participant = (props) => {
    const { image, initials, link, contribution } = props;
    const classes = useStyles();
    const avatarStyles = {
        width: '150px', 
        margin: '7px auto'
    };

    return (
        <ListItem className={classes.participant}>
            <img alt="developer" src={`${image}`} style={avatarStyles}/> 
            <Typography variant="body1" className={classes.participantInit}>
                {initials}
            </Typography>
            <Typography variant="body2" component="p" className={classes.participantInit}>
                <Link variant="body2" href={`https://github.com/${link}`} className={classes.githubLink}>
                    {link}
                </Link>
            </Typography>
            <Typography variant="body2" component="p" className={classes.participantInit}>
                {contribution}
            </Typography>
        </ListItem>     
    )
}

export default Participant;