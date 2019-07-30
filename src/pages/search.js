import React, { Fragment } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import SearchPage from "../components/searchPage";
import 'typeface-roboto';

const searchPage = () => (
    <Fragment>
      <Header />
      <SearchPage />
    </Fragment>
);
export default searchPage;