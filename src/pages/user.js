import React, { Fragment } from "react";
import { Link } from "gatsby";
import Person from '../components/person';
import Header from "../components/header";
import 'typeface-roboto';

const userPage = () => (
  <Fragment>
      <Header />
      <Person />
  </Fragment>
);
export default userPage;