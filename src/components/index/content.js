import React from 'react';
import Description from './description/description';
import ArchitectOfTheDay from './architectOfTheDay/architectOfTheDay';
import Team from './team/team';

const Content = () => {
    return (
        <>
            <Description />
            <ArchitectOfTheDay/>
            <Team />
        </>           
    )
}

export default Content;