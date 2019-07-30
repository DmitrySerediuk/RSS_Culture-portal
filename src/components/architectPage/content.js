import React, { useState, Fragment } from 'react';
import Architect from './architect/architect';
import TimeLine from './timeline/timeline';

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
        </Fragment>
    )
}
export default Content;