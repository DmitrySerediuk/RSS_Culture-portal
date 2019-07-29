import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './header.css';
import Menu from './menu';
import Lang from './lang';


class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Container maxWidth="md">
          <Typography variant="h1" className="header-title" style={{ fontSize: '2rem' }} >
            <Link to={`/`} className="link">
              Architects of Belarus
                </Link>
          </Typography>
          <Lang />
          <Menu />
        </Container>
      </div>
    );
  }
}

export default Header;
