import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

// import logoSrc from "../assets/images/logo.png";

class Header extends Component {
  render() {
    console.log(this);

    //console.log(data.allFile.edges[0].node.publicURL);
    return (
      <React.Fragment>
        < header >
          <Link to="/">
            <img src={this.props.logoImg} alt="logo" />
          </Link>
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