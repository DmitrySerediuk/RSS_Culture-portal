import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";

export default () => (
  <div>
    <Header />
    <div><Link to="/architect/test-architect1">Test architector #1</Link></div>
  </div>
);