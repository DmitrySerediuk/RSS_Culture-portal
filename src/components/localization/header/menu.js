import React, { Component } from "react";
import { Trans } from '@lingui/react';
import { Link, withLingui } from '@wapps/gatsby-plugin-lingui';
import { withI18n } from '@lingui/react';


const Menu = ({ children, i18n }) => (
  <ul>
    <li><Link to='/'>{i18n.t`Main`}</Link></li>
    <li><Link to='/search/'>{i18n.t`List of architects`}</Link></li>
  </ul>
);


// class Menu extends Component {

//   render(...args) {
//     console.log(args);
//     return (
//       <>
//         <ul>
//           <li><Link to='/'><Trans>Home</Trans></Link></li>
//           <li><Link to='/search/'>List of architects</Link></li>
//         </ul>
//       </>
//     );
//   };
// }

// export default Menu;
export default withI18n()(Menu);