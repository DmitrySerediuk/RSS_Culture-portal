import React, {useState,Component} from 'react';
import { Select, MenuItem } from '@material-ui/core';
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

const Lang = (props) => {
    const classes = useStyles();
    const { lang } = props;
    let [value, setValue] = useState();
    const handleChange = e => {
        const {value} = e.target;
        setValue(value);
    };
    return (
        <Select value={value || lang} variant="filled" onChange={handleChange} className={classes.chooseLang}>
          <MenuItem value='en'>EN</MenuItem>
          <MenuItem value='ru'>RU</MenuItem>
          <MenuItem value='by'>BY</MenuItem>
        </Select>
    )
}

export default Lang;