import React, { useState, Fragment } from 'react';
import Architect from './architect/architect';


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
        </Fragment>
    )
}
export default Content;