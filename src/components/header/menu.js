import React, { Fragment } from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { ListItem, List, Typography } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import FlagIcon from '@material-ui/icons/Flag';
import 'typeface-roboto';
import Lang from './lang';
import TemporaryDrawer from './responsiveMenu';

const useStyles = makeStyles(theme => ({
	  nav: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      justifyContent: 'center',
      padding: '0',
      ['@media (max-width: 490px)']: { 
        display: 'none'
      }
    },
    navItem: { 
      color: '#ffffff',
      cursor: 'pointer'
    },
    headerLink: {
      textDecoration: 'none',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      cursor: 'pointer'
    },
    icon: {
      margin: theme.spacing(2),
      color: "#4A90E2"
    }
}));

const Menu = (props) => {
    const { i18n } = props;
    const classes = useStyles();
    return (
      <Fragment>
        <TemporaryDrawer i18n={i18n} />
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
      </Fragment>
    );
}

export default withI18n()(Menu);