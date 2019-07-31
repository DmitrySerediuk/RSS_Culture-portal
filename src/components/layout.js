import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withI18n } from '@lingui/react';
import { Head } from '@wapps/gatsby-plugin-lingui';
import { Container } from '@material-ui/core';
import Header from './header';
import background from '../assets/images/background.jpg';
import Footer from './footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    containerMain: {
      margin: 'auto',
      padding: '0',
      display: 'flex',
      flexDirection: 'column'
    },
    containerNested: {
      backgroundImage: `url(${background})`, 
      margin: 'auto',
      flex: '1 1'
    },

}));

const Layout = ({ children, i18n }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Head hreflang>
        <title>{i18n.t`TITLE__MAIN`}</title>
        <meta name="description" content={i18n.t`DESCRIPTION__MAIN`} />
        <meta name="keywords" content={i18n.t`KEYWORDS__MAIN`} />
      </Head>
      <Container maxWidth={false} className={classes.containerMain}>
        <Header siteTitle={i18n.t`TITLE__MAIN`} />
        <Container maxWidth={false} className={classes.containerNested}>
          {children}
        </ Container>
        <Footer />
      </Container>
    </Fragment>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withI18n()(Layout);
