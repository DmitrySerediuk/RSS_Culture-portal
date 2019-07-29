
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import VideoPlayer from './videoPlayer';

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        top: '250px',
        margin: '0 auto',
        maxWidth: '1000px',
        height: '20em',
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.77) 61%, rgba(244,251,254,0.75) 65%, rgba(143,218,250,0.75) 100%)',
    },
    title: {
        fontSize: '3em',
        margin: '2% 40%',
    },
    button: {
        position: 'relative',
        width: '20em',
        height: '5em',
        margin: '5% auto',
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
    },

    videoContainer: {
        position: 'relative',
        margin: '0 auto',
        maxWidth: '85%',
        maxHeight: '85%',
    }
}));

export default function VideoModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.card}>
            <CardContent >
                <Typography className={classes.title}>
                    YouTube
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} onClick={handleOpen}>Смотреть видео</Button>
            </CardActions>
            <Modal open={open} className={classes.videoContainer}>
                <div className={classes.videoContainer}>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <VideoPlayer  />   
                </div>
            </Modal>
        </Card>
    )
}
