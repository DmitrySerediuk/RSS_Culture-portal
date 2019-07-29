import React from 'react';
import ArchitectList from './architectList';
import SearchInput from './searchInput';
import Title from './title';
import {Container} from '@material-ui/core';
 
export default () => {
    return (
        <Container maxWidth="md">
            {/* <Title /> */}
            {/* <SearchInput /> */}
            <ArchitectList />
        </Container>
    )
}
