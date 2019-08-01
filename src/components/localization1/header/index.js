import React from 'react';
import { Link } from '@wapps/gatsby-plugin-lingui';

import Switcher from './switcher';
import Menu from './menu';

const Header = ({ siteTitle }) => {
  return (
    <div>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <Menu />
        <Switcher />
      </div>
    </div>
  );
}

export default Header;
