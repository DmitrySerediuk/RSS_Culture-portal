import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';



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
        />
      </div>
    )
  }
