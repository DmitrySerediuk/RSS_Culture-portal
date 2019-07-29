import React, { Component } from "react";
import { Link } from '@wapps/gatsby-plugin-lingui';
import { withI18n } from '@lingui/react';
import Button from '@material-ui/core/Button';


class Menu extends Component {

  render() {
    const { i18n } = this.props;
    return (
      <div className="nav">
        <Button variant="contained" color="primary" className="nav-btn">
          <Link to='/' className="header-link">{i18n.t`Main`}</Link>
        </Button>
        <Button variant="contained" color="primary" className="nav-btn">
          <Link to='/search/' className="header-link">{i18n.t`List of architects`}</Link>
        </Button>
      </div>
    );
  };
}
export default withI18n()(Menu);