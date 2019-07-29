import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import './header.css';
import Menu from './menu';
import Lang from './lang';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


class Header extends Component {
  render() {
    // const { logoImg } = this.props;
    const lang = this.props.lang || 'ru';
    return (
        <div className="header-wrapper">
          <Container maxWidth="md">
            <Typography variant="h1" className="header-title" style={{fontSize: '2rem'}} >
                <Link to={`${lang}/`} className="link">
                  Architects of Belarus
                </Link>
            </Typography>
            <Lang />
            <Menu lang={lang} />
          </Container>
        </div>
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