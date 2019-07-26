import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// import logoSrc from "../assets/images/logo.png";
const Header = () => {
  const data = useStaticQuery(
    graphql`
        query {
          allFile(filter: { name: { eq: "logo" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `
  )
  console.log(data.allFile.edges[0].node.publicURL);
  return (
    < header >
      <Link to="/">
        <img src={data.allFile.edges[0].node.publicURL} alt="logo" />
      </Link>
    </header >
  )
}

export default Header;