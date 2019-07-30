import React, { Fragment } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Search from "../components/search";

const searchPage = () => (
    <Fragment>
      <Header />
      <Search />
    </Fragment>
);
export default searchPage;