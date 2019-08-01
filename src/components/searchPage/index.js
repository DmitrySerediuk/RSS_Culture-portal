import React from 'react';
import ArchitectList from './ArchitectList';
import { Trans } from '@lingui/react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		background: '#ffffff', 
		margin: 'auto', 
		width: '85%',
		padding: '20px 0', 
		minHeight: '100vh',
	},
	title: {
		padding: '20px 0',
		textAlign: 'center'
	}
}));

const SearchPage = () => {
	const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.container}> 
            <Typography variant='h5' className={classes.title}>
                <Trans>SEARCH__TITLE</Trans>
            </Typography> 
            <ArchitectList /> 
        </Container>    
    )
}

export default SearchPage;