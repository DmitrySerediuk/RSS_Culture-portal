import React, { useState, Fragment } from 'react';
import Architect from './architect/architect';
import TimeLine from './timeline/timeline';
import Works from './works/works';
import Video from './video/videoContainer';
import Gallery from './gallery/slider';
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
             <Video url={url}/>
             <Gallery />
        </Fragment>
    )
}
export default Content;