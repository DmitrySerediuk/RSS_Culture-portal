import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event'; 
import DescriptionIcon from '@material-ui/icons/Description'; 
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CollectionsIcon from '@material-ui/icons/Collections';
import MapIcon from '@material-ui/icons/Map';
import { Link } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
      position: 'fixed',
      top:'11%',
      left: '94%',
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'rgba(0,0,0,0)',
    },

    icon: {
       width: '1.5em',
       height: '1.5em',
       color: '#237ad7',
       '&:hover' : {
         width: '1.7em',
         height: '1.7em',
         color: '#a0cdfe',
       }
    },
    focused: {}
  }));

  
  export default function Navigation() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
              <HomeIcon className={classes.icon} />
          </ListItem>
          <ListItem button>
          <Link href='#timeline'>
              <EventIcon className={classes.icon} />
            </Link>
          </ListItem>
        <ListItem button>
        <Link href='#works'>
              <DescriptionIcon className={classes.icon} />
            </Link>
          </ListItem>
          <ListItem button>
                <Link href='#video'>
                 <VideoLibraryIcon className={classes.icon} /> 
              </Link>
          </ListItem>
          <ListItem button>
          <Link href='#gallery'>
              <CollectionsIcon className={classes.icon} />
            </Link>
          </ListItem>
          <ListItem button>
          <Link href='#map'>
              <MapIcon className={classes.icon}/>
            </Link>
          </ListItem>
        </List>
      </div>
    );
  }