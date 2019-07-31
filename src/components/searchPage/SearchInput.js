import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    searchInput: {
        width: '100%'
    },
}));
export default function ArchitectItem({changeListFilterValue}) {
    const classes = useStyles();
    const [state, setState] = useState({
        searchValue:''
    })
    const onChangeSearchInput = (e) =>{
        const {value} = e.target
        setState({searchValue:value})
        changeListFilterValue(value)
    }
    return (
        <TextField
            className={classes.searchInput}
            variant="filled"
            placeholder="Введите имя или фамилию"
            type="search"
            onChange={onChangeSearchInput}
        />)
}