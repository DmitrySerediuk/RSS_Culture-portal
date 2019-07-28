import React, { Component } from 'react';
import { Link } from "gatsby";

import Header from "../components/header";
import ArchitectList from "../components/ArchitectList"
class indexPage extends Component {


  render() {
    console.log(this);
    const { lang } = this.props.pageContext;

    return (
      <React.Fragment>
        <Header lang={lang} />
        <ArchitectList/>
      </React.Fragment>
    );
  }
}

export default indexPage;