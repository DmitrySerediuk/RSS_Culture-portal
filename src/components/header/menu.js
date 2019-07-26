import React, { Component } from "react";
import { Link } from "gatsby";

class Menu extends Component {

  render() {
    const { lang } = this.props;
    return (
      <React.Fragment>
        <ul>
          <li><Link to={`/${lang}`}>Home</Link></li>
          <li><Link to={`/${lang}/search`}>Search</Link></li>
        </ul>
      </React.Fragment >
    );
  };
}

export default Menu;