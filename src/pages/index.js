import React, { Component } from 'react';
import { Link } from "gatsby";

import Header from "../components/header";
import VideoModal from '../components/architectPage/video/videoContainer';
import Gallery from '../components/architectPage/gallery/slider';

class indexPage extends Component {


  render() {
    console.log(this);
    const { lang } = this.props.pageContext;

    return (
      <React.Fragment>
        <Header lang={lang} />
        <VideoModal/>
        <Gallery />
      </React.Fragment>
    );
  }
}

export default indexPage;