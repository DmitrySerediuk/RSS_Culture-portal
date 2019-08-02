import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    searchInput: {
        width: '80%',
    },
    selector: {
        width: '20%'
    }
}));
export default function ArchitectItem({ changeListFilterValue }) {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const [searchOptions] = useState([
        {
            title: 'По имени',
            value: 'name'
        },
        {
            title: 'По городу',
            value: 'bitrhPlace'
        }
    ]);
    const menuItemList = searchOptions.map(option => {
        const { title, value } = option
        return (
            <MenuItem
                key={value}
                value={value}
            >
                {title}
            </MenuItem>
        )
    })
    const onChangeSearchInput = (e) => {
        const { value } = e.target
        setSearchValue(value)
        changeListFilterValue([value, searchBy])
    }
    const onChangeSearchOption = (e) => {
        const { value } = e.target
        setSearchBy(value)
        changeListFilterValue([searchValue, value])
    }
    return (
        <Box>
            <TextField
                className={classes.searchInput}
                placeholder="Поиск"
                type="search"
                onChange={onChangeSearchInput}
            />
            <Select
                className={classes.selector}
                value={searchBy}
                onChange={onChangeSearchOption}
            >
                {menuItemList}
            </Select>
        </Box>

    )
}