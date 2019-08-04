import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event'; 
import DescriptionIcon from '@material-ui/icons/Description'; 
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CollectionsIcon from '@material-ui/icons/Collections';
import MapIcon from '@material-ui/icons/Map';
import { Link  as ScrolLink } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top:'15%',
    right: '3%',
    width: '100%',
    maxWidth: '3rem',
    backgroundColor: 'rgba(0,0,0,0)',
    ['@media (max-width:1020px)']: {
      top: '30%',
    },
    ['@media (max-width:490px)']: {
      right: '1%',
    }
  },

  icon: {
     width: '1.5em',
     height: '1.5em',
     color: '#237ad7',
     transition: 'all 0.3s',
     '&:hover' : {
       width: '1.7em',
       height: '1.7em',
       color: '#a0cdfe',
     }
  }
  }));

  
  export default function Navigation() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
          <ScrolLink to='timeline' spy={true} smooth={true} duration={500}>
            <EventIcon className={classes.icon} />
          </ScrolLink>
          </ListItem>
        <ListItem button>
        <ScrolLink to='works' spy={true} smooth={true} duration={500}>
              <DescriptionIcon className={classes.icon} />
            </ScrolLink>
          </ListItem>
          <ListItem button>
                <ScrolLink to='video' spy={true} smooth={true} duration={500}>
                 <VideoLibraryIcon className={classes.icon} /> 
              </ScrolLink>
          </ListItem>
          <ListItem button>
          <ScrolLink to='gallery' spy={true} smooth={true} duration={500}>
              <CollectionsIcon className={classes.icon} />
            </ScrolLink>
          </ListItem>
          <ListItem button>
          <ScrolLink to='map' spy={true} smooth={true} duration={500}>
              <MapIcon className={classes.icon}/>
            </ScrolLink>
          </ListItem>
        </List>
      </div>
    );
  }