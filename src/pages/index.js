import React, { Component } from 'react';
// import { Link } from "gatsby";
import { Link, useStaticQuery, graphql } from "gatsby";
// import Header from '../src/components/header';

import Header from "../components/header";

class indexPage extends Component {


  render() {
    console.log(this);

    return (
      <React.Fragment>
        <Header />
        <div>
          <div><Link to="/search">Link to search list of arhitectors</Link></div>
        </div>
      </React.Fragment>
    );
  }
}

export default indexPage;