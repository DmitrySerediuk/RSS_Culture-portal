import React from 'react';
import {Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        padding: '24px 0',
        textAlign: 'center'
    },
    initials: {
        fontSize: '2rem',
        padding: '15px 0 5px 0'
    },
    years: {
        fontSize: '1.25rem',
        paddingBottom: '10px',
        color: '#454546' 
    },
    desc: {
        fontSize: '1rem' 
    }
});

const Architect = (props) => {
    const classes = useStyles();
    const { src, initials, yearsOfLife, desc } = props;
    return (
        <Container maxWidth="md" className={classes.container}>
            <img src={`${src}`} width='200'/>
            <Typography variant="h2" className={classes.initials}>
                {initials}
            </Typography>
            <Typography variant="h5" component="p" className={classes.years}>
                {yearsOfLife}
            </Typography>
            <Typography variant="body2" component="p" className={classes.desc}>
                {desc}
            </Typography>
        </Container>
    )
}
export default Architect;
