import React from 'react';
import { Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#263545',
        width: '100%',
        padding: '10px 0',
        textAlign: 'center',
        color: '#ffffff',
        boxShadow: 'inset 0px 4px 4px #000000'
    },
    paragraph: {
        margin: '10px auto' 
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.footer}>
            <Typography variant="body1" className={classes.paragraph}>
                This site was created by the development team from Rolling Scopes.
            </Typography>
            <Typography variant="body2" component="p" className={classes.paragraph}>
                &copy; Rolling Scopes 2019
            </Typography>
        </Container>
    )
}

export default Footer;
