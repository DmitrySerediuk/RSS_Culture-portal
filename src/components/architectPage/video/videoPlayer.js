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
        />
      </div>
    )
  }
