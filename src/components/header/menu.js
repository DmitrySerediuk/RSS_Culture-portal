import React from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { ListItem, List, Typography } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { makeStyles } from '@material-ui/core/styles';
import { Search, Home, Flag } from '@material-ui/icons';
import 'typeface-roboto';
import Lang from './lang';

const useStyles = makeStyles(theme => ({
	  nav: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      justifyContent: 'center',
      padding: '0'
    },
    navItem: { 
      color: '#ffffff',
    },
    headerLink: {
      textDecoration: 'none',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: '0.75rem'
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
      <List className={classes.nav}>     
        <ListItem className={classes.navItem}>
          <Home className={classes.icon} />
          <Typography>
            <Link to='/' className={classes.headerLink}>{i18n.t`HEADER__MENU--MAIN`}</Link>
          </ Typography>
        </ListItem>
        <ListItem  className={classes.navItem}>
          <Search className={classes.icon} />
          <Typography>
            <Link to='/search/' className={classes.headerLink}>{i18n.t`HEADER__MENU--SEARCH`}</Link>
          </ Typography>
        </ListItem>
        <ListItem  className={classes.navItem}>
          <Flag className={classes.icon} />
          <Lang />
        </ListItem>
      </List>
    );
}

export default withI18n()(Menu);