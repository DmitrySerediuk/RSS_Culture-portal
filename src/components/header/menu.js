import React, { Component } from "react";
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';

class Menu extends Component {

  render() {
    const { lang } = this.props;
    return (
        <div className="nav">        
          <Button variant="contained" color="primary" className="nav-btn">
            <Link to={`/${lang}`} className="header-link">Home</Link>
          </Button>
          <Button variant="contained" color="primary" className="nav-btn">
            <Link to={`/${lang}`} className="header-link">Search</Link>
          </Button>
        </div>
    );
  };
}

export default Menu;