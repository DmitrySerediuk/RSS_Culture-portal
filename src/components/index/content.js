import React, { Fragment } from 'react';
import Description from './description/description';
import ArchtitectOfTheDay from './architectOfTheDay/architectOfTheDay';
import Team from './team/team';

const Content = (props) => {
    const {architectOfTheDay} = props.data;
    console.log(architectOfTheDay);
    return (
            <Fragment>
                <Description />
                <ArchtitectOfTheDay architectOfTheDay={architectOfTheDay}/>
                <Team />
            </Fragment>           
    )
}

export default Content;