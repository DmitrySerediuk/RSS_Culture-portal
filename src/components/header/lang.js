import React from 'react';
import { Language } from '@wapps/gatsby-plugin-lingui';
import { Typography } from '@material-ui/core';

const Switcher = ({ changeLng, lng, availableLngs }) => {

    return (
        <Typography component="select" className="choose-lang" onChange={(event) => changeLng(event.target.value)}>
            {availableLngs.map(value => (
                <option key={value} value={value} selected={value === lng}>{value}</option>
            ))}
        </Typography>
    );
}

export default props => (
    <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);
