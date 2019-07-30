import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    searchInput: {
        width: '100%',
        margin: '10px 0',
    },
}));

export default function ArchitectItem({changeListFilterValue}) {
    const classes = useStyles();
    const [state, setState] = useState({
        searchValue:''
    });
    const onChangeSearchInput = (e) =>{
        const {value} = e.target
        setState({searchValue:value})
        changeListFilterValue(value)
    }
    return (
        <TextField
            className={classes.searchInput}
            inputProps={{style: {padding: '10px 15px'}}}
            variant="filled"
            placeholder="Введите имя или фамилию"
            type="search"
            onChange={onChangeSearchInput}
        />)
}