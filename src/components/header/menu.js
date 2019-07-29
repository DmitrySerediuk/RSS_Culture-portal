import React from "react";
import { Link } from "gatsby";
import { Button, Toolbar } from '@material-ui/core';
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
      width: '6rem',
      color: '#ffffff'
    },
    headerLink: {
      textDecoration: 'none',
      color: '#ffffff'
    }
}));

const NavBar = (props) => {
    const { lang } = props;
    const classes = useStyles();
    return (
        <Toolbar className={classes.nav}>     
            <Button variant="contained" color="primary" className={classes.navBtn}>
              <Link to={`/`} className={classes.headerLink}>Home</Link>
            </Button>
            <Button variant="contained" color="primary" className={classes.navBtn}>
              <Link to={`/search`} className={classes.headerLink}>Search</Link>
            </Button>
        </Toolbar>
    );
}

export default NavBar;