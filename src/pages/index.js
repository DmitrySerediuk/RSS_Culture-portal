import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";

import Header from "../components/header";
import Content from '../components/index/content';
import 'normalize.css';


class indexPage extends Component {
  render() {
    const { lang } = this.props.pageContext;
    return (
      <Fragment>
          <Header lang={lang} />
          <Content />
      </Fragment>
    );
  }
}

export default indexPage;