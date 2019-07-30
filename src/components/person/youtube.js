import React, { useState } from 'react';
import { Container, Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0',
    },
    title: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#2F9DFF',
        fontWeight: 'bold'
    },
    watch: {
        margin: '50px auto',
        padding: '0 35px',
        fontSize: '1.25rem',
        display: 'flex',
    },
    // link: {
    //     color: '#ffffff',
    //     margin: '20px auto',
    //     fontWeight: 'bold',
    //     textDecoration: 'none'
    // }
}));

const Youtube = (props) => {
    const link = {
        color: '#ffffff',
        margin: '20px auto',
        fontWeight: 'bold',
        textDecoration: 'none' 
    }

    const {url} = props;
    const classes = useStyles();
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h3" className={classes.title}>
                Youtube
            </Typography>
            <Button  variant="contained" underline="none" color="primary" onClick={handleClick} className={classes.watch}>
                {/* <Link href={url} component="a" className={classes.link}>  */}
                   <a href={url} style={link}> Watch The Video </a>
                {/* </Link> */}
            </Button>
        </Container>
    )
}
export default Youtube;