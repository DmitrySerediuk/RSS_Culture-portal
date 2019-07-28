import React from 'react';
import { Typography } from '@material-ui/core';

const Lang = () => {
    return (
        <Typography component="select" className="choose-lang">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="by">BY</option>
        </Typography>
    )
}

export default Lang;