import React from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { Button, Toolbar } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	  nav: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridGap: '30px',
      justifyContent: 'center',
      margin: '0 auto',
      padding: '0 0 10px 0'
    },
    navBtn: { 
      color: '#ffffff'
    },
    headerLink: {
      textDecoration: 'none',
      color: '#ffffff'
    }
}));

const Menu = (props) => {
    const { i18n } = props;
    const classes = useStyles();
    return (
      <Toolbar className={classes.nav}>     
        <Button variant="contained" color="primary" className={classes.navBtn}>
          <Link to='/' className={classes.headerLink}>{i18n.t`HEADER__MENU--MAIN`}</Link>
        </Button>
        <Button variant="contained" color="primary" className={classes.navBtn}>
          <Link to='/search/' className={classes.headerLink}>{i18n.t`HEADER__MENU--SEARCH`}</Link>
        </Button>
      </Toolbar>
    );
}

export default withI18n()(Menu);