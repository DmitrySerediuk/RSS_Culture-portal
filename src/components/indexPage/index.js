import React from 'react';
import Content from './content';
import {Container} from '@material-ui/core';

const StartPage = () => {
    const data = {  
            architectOfTheDay: {
                imageSrc: "https://grnkvch.github.io/CodeJam-Culture-Portal/static/baklanov-e8c0f280f4b86d29526072e70c9ee431.jpg",
                initials: 'Mikhail Ivanovich Baklanov',
                yearsOfLife: 'January 30 (February 12) - January 23, 1990',
                desc: 'Belarusian Soviet architect. Honored Architect of the Belorussian SSR (1969)'   
            }                 
    }
    console.log(data);
    return (
            <Container maxWidth="md">
                <Content data={data}/>
            </Container>           
    )
}
export default StartPage;