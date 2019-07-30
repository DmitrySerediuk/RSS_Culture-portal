import React, { Component } from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withI18n } from '@lingui/react';
import Menu from './menu';
import Lang from './lang';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  headerWrapper: {
    width: '100%',
    boxShadow: '2px 2px 2px #000000',
    background: 'linear-gradient(90deg,#898989, #444444, #898989)',
    position: 'relative'
  },
  headerTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '27px 0'
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
        <Container maxWidth={false} className={classes.headerWrapper}>
          <Typography variant="h1" className={classes.headerTitle} >
            <Link to={`/`} className={classes.homeLink}>
              {i18n.t`HEADER__TITLE`}
            </Link>
          </Typography>
          <Lang />
          <Menu />
        </Container>
    );
}

export default withI18n()(Header);
