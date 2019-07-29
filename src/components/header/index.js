import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import NavBar from './menu';
import Lang from './lang';


const useStyles = makeStyles(theme => ({
  headerWrapper: {
    width: '100%',
    boxShadow: '2px 2px 2px #000000',
    background: 'linear-gradient(90deg,#898989, #444444, #898989)',
    position: 'relative'
  },
  headerTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '27px 0'
  },
  homeLink: {
    textDecoration: 'none',
    color: '#ffffff'
  }
}));

const Header = (props) => { 
    const classes = useStyles();
    // const { logoImg } = this.props;
    
    const lang = props.lang || 'ru';
    return (
          <Container maxWidth={false} className={classes.headerWrapper}>
            <Typography variant="h1" className={classes.headerTitle} >
                <Link to={`${lang}/`} className={classes.homeLink}>
                  Architects of Belarus
                </Link>
            </Typography>
            <Lang lang={lang}/>
            <NavBar lang={lang} />
          </Container>
    );
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