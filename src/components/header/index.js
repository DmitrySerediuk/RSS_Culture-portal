import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import Menu from './menu';

class Header extends Component {
  render() {
    // console.log(this);
    const { logoImg } = this.props;
    const lang = this.props.lang || 'ru';
    console.log(this.props);
    return (
      <React.Fragment>
        < header >
          <Link to={`${lang}/`}>
            <img src={logoImg} alt="logo" />
          </Link>
          <Menu lang={lang} />
        </header >
      </React.Fragment>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { name: { eq: "logo" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => (
      <Header logoImg={data.allFile.edges[0].node.publicURL} />
    )}
  />
)