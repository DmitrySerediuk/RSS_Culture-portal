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
    },
    button: {
        position: 'relative',
        padding: '1rem 3rem',
        margin: '1rem auto',
        display: 'block',
        boxShadow: '21px 7px 29px -3px rgba(0,0,0,0.74)',
        background: 'linear-gradient(to right, rgba(194, 234, 241, 0.93) 18%, rgba(113, 195, 229, 0.75) 65%, rgba(30, 126, 167, 0.75) 100%)',
    },

    closeButton: {
        position: 'absolute',
        right: '-4%',
        top: theme.spacing(2),
        color: '#e7e7e7',
    },

    videoContainer: {
        position: 'relative',
        margin: '0 auto',
        maxWidth: '85%',
        maxHeight: '85%',
    }
}));

export default function VideoModal(props) {
    const {url} = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h3" className={classes.title}>
                YouTube
            </Typography>
            <Button className={classes.button} onClick={handleOpen}>Watch The Video</Button>
            <Modal open={open} className={classes.videoContainer}>
                <div className={classes.videoContainer}>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <VideoPlayer url={url} />   
                </div>
            </Modal>
        </Container>
    )
}