import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import { withI18n } from '@lingui/react';

const useStyles = makeStyles(theme => ({
  searchInput: {
    width: '80%',
    background: '#dddddd',
  },
  selector: {
    width: '20%',
    background: '#c4c4c4',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    color: '#333333'
  },
}));

const SearchInput = ({ changeListFilterValue, i18n }) => {
  console.log(changeListFilterValue, changeListFilterValue.toString());
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [searchOptions] = useState([
    {
      title: i18n.t`SEARCH__TYPE--NAME`,
      value: 'name'
    },
    {
      title: i18n.t`SEARCH__TYPE--CITY`,
      value: 'birthPlace'
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
        inputProps={{style: {paddingLeft: '10px'}}}
        placeholder={i18n.t`SEARCH__PLACEHOLDER`}
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

export default withI18n()(SearchInput);