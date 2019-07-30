import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";
import Header from "../components/header";
import StartPage from '../components/indexPage';
import 'normalize.css';
import 'typeface-roboto';

class indexPage extends Component {
  render() {
    const { lang } = this.props.pageContext;
    return (
      <Fragment>
          <Header lang={lang} />
          <StartPage />
      </Fragment>
    );
  }
}

export default indexPage;