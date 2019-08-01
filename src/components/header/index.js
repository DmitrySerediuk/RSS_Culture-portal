import React from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withI18n } from '@lingui/react';
import Menu from './menu';
import 'typeface-roboto';
import logo from '../../assets/images/architect-logo-small.png';

const useStyles = makeStyles(theme => ({
  headerWrapper: {
    boxShadow: '0px 4px 4px #000000',
    backgroundColor: '#263545',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '0 1',
    ['@media (max-width: 1020px)']: { 
        flexDirection: 'column'
    }
  },
  containerLogo: {
    margin: '0',
    padding: '0',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    ['@media (max-width: 1020px)']: { 
      padding: '5px 0'
    },
    ['@media (max-width: 490px)']: { 
      justifyContent: 'center',
    }
  },
  headerTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '10px',
    ['@media (max-width: 490px)']: { 
      flex: '0 1',
      textAlign: 'left'
    }
  },
  homeLink: {
    textDecoration: 'none',
    color: '#ffffff'
  }
}));

const Header = (props) => {
    const classes = useStyles();
    const { i18n } = props;
    return (
            <Toolbar className={classes.headerWrapper}>
              <Container className={classes.containerLogo}>
                 <img src={logo}/>
                   <Typography variant="h1" className={classes.headerTitle} >
                     <Link to={`/`} className={classes.homeLink}>
                       {i18n.t`HEADER__TITLE`}
                     </Link>
                   </Typography>
              </Container>
              <Menu />
            </Toolbar>
    );
}

export default withI18n()(Header);
