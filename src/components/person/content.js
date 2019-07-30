import React, { useState, Fragment } from 'react';
import Architect from './architect';
import TimeLine from './timeline';
import Works from './works';
import Gallery from './gallery';
import Youtube from './youtube';
import Map from './map';

const Content = (props) => {
    const {imageSrc, initials, yearsOfLife, desc, works, url, timeline} = props.data;

    return (
        <Fragment>            
            <Architect 
                src={imageSrc}
                initials={initials}
                yearsOfLife={yearsOfLife}
                desc={desc}
            />
            <TimeLine timeline={timeline}/>
            <Works works={works}/>
            <Gallery />
            <Youtube url={url}/>
            <Map />
        </Fragment>
    )
}
export default Content;