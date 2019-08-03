import React from 'react';
import { Language } from '@wapps/gatsby-plugin-lingui';
import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    chooseLang: {
        color: '#ffffff',
        padding: '2px',
        borderRadius: '5px',
        boxShadow: '1px 1px 2px #000000',
        outline: 'none',
        cursor: 'pointer',
    }
}));

const Switcher = ({ changeLng, lng, availableLngs }) => {
    const classes = useStyles();
    return (
        <Select variant="filled" value={lng} onChange={(event) => changeLng(event.target.value)} className={classes.chooseLang}>
            {availableLngs.map(value => (
                <MenuItem key={value} value={value} selected={value === lng}>{value}</MenuItem>
            ))};
            </Select>
    );
}

export default props => (
    <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);