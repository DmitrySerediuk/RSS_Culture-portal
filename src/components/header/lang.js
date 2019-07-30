import React from 'react';
import { Language } from '@wapps/gatsby-plugin-lingui';
import { Select, MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chooseLang: {
        position: 'absolute',
        top: '35px',
        right: '35px',
        background: '#444444',
        color: '#ffffff',
        padding: '2px',
        borderRadius: '5px',
        boxShadow: '1px 1px 2px #000000',
        outline: 'none',
        cursor: 'pointer',
        zIndex: '2'
    }
}));

const Switcher = ({ changeLng, lng, availableLngs }) => {
    const classes = useStyles();
    return (
        // <Typography component="select" className={classes.chooseLang} onChange={(event) => changeLng(event.target.value)}>
        //     {availableLngs.map(value => (
        //         <option key={value} value={value} selected={value === lng}>{value}</option>
        //     ))}
        // </Typography>
        <Select variant="filled" onChange={(event) => changeLng(event.target.value)} className={classes.chooseLang}>
            {availableLngs.map(value => (
                // <option key={value} value={value} selected={value === lng}>{value}</option>
                <MenuItem key={value} value={value} selected={value === lng}>{value}</MenuItem>
            ))};
        </Select>
    );
}

export default props => (
    <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);