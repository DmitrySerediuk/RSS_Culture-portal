import React, { useState, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from '@wapps/gatsby-plugin-lingui';
import Architect from './architect/architect';
import TimeLine from './timeline/timeline';
import Works from './works/works';
import Video from './video/videoContainer';
import Gallery from './gallery/slider';
import Map from './map';
import { withI18n } from '@lingui/react';

const Content = (props) => {
    const { imageSrc, initials, yearsOfLife, desc, works, url, timeline } = props.data;
    const { i18n } = props;

    return (
        <Fragment>
            <Architect
                src={imageSrc}
                initials={initials}
                yearsOfLife={yearsOfLife}
                desc={desc}
            />
            <TimeLine timeline={timeline} />
            <Works works={works} />
            <Video url={url} />
            <Gallery />
            <Map />
            <Button variant="contained" color="default" style={{ margin: '30px auto', display: 'block' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#222222' }}>
                    {i18n.t`USER__BUTTON--GO-HOME`}
                </Link>
            </Button>
        </Fragment>
    )
}
export default withI18n()(Content);