import React, { Component } from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withI18n } from '@lingui/react';

import './header.css';
import Menu from './menu';
import Lang from './lang';


class Header extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <div className="header-wrapper">
        <Container maxWidth="md">
          <Typography variant="h1" className="header-title" style={{ fontSize: '2rem' }} >
            <Link to={`/`} className="link">
              {i18n.t`HEADER__TITLE`}
            </Link>
          </Typography>
          <Lang />
          <Menu />
        </Container>
      </div>
    );
  }
}

export default withI18n()(Header);
