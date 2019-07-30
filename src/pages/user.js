import React, { Fragment } from "react";
import { Link } from "gatsby";
import ArchitectPage from '../components/architectPage';
import Header from "../components/header";
import 'typeface-roboto';

const userPage = () => (
  <Fragment>
      <Header />
      <ArchitectPage />
  </Fragment>
);
export default userPage;