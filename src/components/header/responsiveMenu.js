import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ListItem, List, Typography } from '@material-ui/core';
import { Link } from '@wapps/gatsby-plugin-lingui';
import Lang from './lang';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon  from '@material-ui/icons/Flag';
import ListIcon  from '@material-ui/icons/List';

import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    backgroundColor: '#263545'
  },
  fullList: {
    width: 'auto',
  },
  nav: {
      minHeight: '100vh'
  },
  icon: {
    margin: theme.spacing(2),
    color: "#4A90E2"
  },
  headerLink: {
    textDecoration: 'none',
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    cursor: 'pointer'
  },
  navItem: { 
    cursor: 'pointer'
  },
  navMenu: {
    display: 'none',
    backgroundColor: '#263545',
    padding: '10px 0',
    ['@media (max-width: 490px)']: { 
        display: 'block'
    }
  },
  navBtn: {
     display: 'block',
     color: '#ffffff',
     margin: '0 auto',
     fontWeight: 'normal',
     backgroundColor: '#002132'
  }
}));

export default function TemporaryDrawer(props) {
  const { i18n } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    } else if (event.target.tagName === 'DIV' && event.target.classList.contains('MuiSelect-root')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
       <List className={classes.nav} >    
          <ListItem className={classes.navItem}>
            <HomeIcon className={classes.icon} />
            <Typography>
              <Link to='/' className={classes.headerLink}>{i18n.t`HEADER__MENU--MAIN`}</Link>
            </ Typography>
          </ListItem>
          <ListItem  className={classes.navItem}>
            <ListIcon className={classes.icon} />
            <Typography>
              <Link to='/search/' className={classes.headerLink}>{i18n.t`HEADER__MENU--SEARCH`}</Link>
            </ Typography>
          </ListItem>
          <ListItem  className={classes.navItem}>
            <FlagIcon className={classes.icon} />
            <Lang />
          </ListItem>
        </List>
    </div>
  );

  return (
    <Container className={classes.navMenu}>
        <Button onClick={toggleDrawer('left', true)} className={classes.navBtn}>Menu</Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
        </Drawer>
    </Container>
  );
}