import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

<<<<<<< HEAD
=======


>>>>>>> development
const useStyles = makeStyles({
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%', 
  },

  reactPlayer: {
    position: 'absolute',
    top: '10%',
    left: '0',
  },

});

<<<<<<< HEAD
export default function VideoPlayer(props) {
const classes = useStyles();
const {url} = props;
    return (
    	<div className={classes.playerWrapper}>
        <ReactPlayer
          url={url}
          className={classes.reactPlayer}
          playing={true}
          width='100%'
          height='100%'
          controls={true}
=======
export default function VideoPlayer() {
const classes = useStyles();
    return (
    	<div className={classes.playerWrapper}>
        <ReactPlayer
          url='https://www.youtube.com/watch?time_continue=6&v=6mUgWtHkQFY'
          className={classes.reactPlayer}
          controls = 'true'
          playing
          width='100%'
          height='100%'
>>>>>>> development
        />
      </div>
    )
  }
