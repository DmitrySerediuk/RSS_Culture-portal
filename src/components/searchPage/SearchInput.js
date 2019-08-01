import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Search } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        margin: '0px auto',
        backgroundColor: '#dddddd'
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
}));
export default function ArchitectItem({changeListFilterValue}) {
    const classes = useStyles();
    const [state, setState] = useState('')
    const onChangeSearchInput = (e) =>{
        const {value} = e.target;
        setState(value);
        changeListFilterValue(value);
    }
    return (
            // <TextField
            //     className={classes.searchInput}
            //     variant="filled"
            //     placeholder="Введите имя или фамилию"
            //     type="search"
            //     onChange={onChangeSearchInput}
            // />
            <Paper className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    type="search"
                    placeholder="Введите имя или фамилию"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={onChangeSearchInput}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
    )
}