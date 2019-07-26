import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";

export default () => (
  <div>
    <Header />
    <div><Link to="/architects">Link to search list of arhitectors</Link></div>
  </div>
);