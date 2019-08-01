<<<<<<< HEAD
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import VideoPlayer from './videoPlayer';


const useStyles = makeStyles(theme => ({
    container: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        color: '#4A90E2',
        fontSize: '3em',
        fontWeight: 'bold', 
        margin: 'auto',
        textAlign: 'center'
=======

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import VideoPlayer from './videoPlayer';

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        margin: '10% auto',
        maxWidth: '1000px',
        height: '20em',
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.77) 61%, rgba(244,251,254,0.75) 65%, rgba(143,218,250,0.75) 100%)',
    },
    title: {
        fontSize: '3em',
        margin: '2% 40%',
>>>>>>> development
    },
    button: {
        position: 'relative',
        width: '20em',
        height: '5em',
        margin: '5% auto',
<<<<<<< HEAD
        display: 'block',
        boxShadow: '21px 7px 29px -3px rgba(0,0,0,0.74)',
        background: 'linear-gradient(to right, rgba(194, 234, 241, 0.93) 18%, rgba(113, 195, 229, 0.75) 65%, rgba(30, 126, 167, 0.75) 100%)',
    },

    closeButton: {
        position: 'absolute',
        right: '-4%',
        top: theme.spacing(2),
        color: '#e7e7e7',
=======
        borderRadius: '10%',
        border: '1px solid blue',
        boxShadow: '21px 7px 29px -3px rgba(0,0,0,0.74)',
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(194, 234, 241, 0.93) 18%, rgba(113, 195, 229, 0.75) 65%, rgba(30, 126, 167, 0.75) 100%)',
    },
    closeButton: {
        position: 'absolute',
        right: '-10%',
        top: theme.spacing(1),
        color: '#e7e7e7f2',
>>>>>>> development
    },

    videoContainer: {
        position: 'relative',
        margin: '0 auto',
        maxWidth: '85%',
        maxHeight: '85%',
    }
}));

<<<<<<< HEAD
export default function VideoModal(props) {
    const {url} = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
=======
export default function VideoModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
>>>>>>> development

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
<<<<<<< HEAD
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h3" className={classes.title}>
                YouTube
            </Typography>
            <Button className={classes.button} onClick={handleOpen}>Watch The Video</Button>
=======
        <Card className={classes.card}>
            <CardContent >
                <Typography className={classes.title}>
                    YouTube
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} onClick={handleOpen}>Смотреть видео</Button>
            </CardActions>
>>>>>>> development
            <Modal open={open} className={classes.videoContainer}>
                <div className={classes.videoContainer}>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
<<<<<<< HEAD
                    <VideoPlayer url={url} />   
                </div>
            </Modal>
        </Container>
    )
}
=======
                    <VideoPlayer  />   
                </div>
            </Modal>
        </Card>
    )
}
>>>>>>> development
