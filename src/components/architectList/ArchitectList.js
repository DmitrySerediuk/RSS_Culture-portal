import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ArchitectItem from './ArchitectItem'
import SearchInput from './SearchInput'

const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
		maxWidth: 1000,
		backgroundColor: theme.palette.background.paper,
		margin: 'auto'
	},
}));

export default function ArchitectList() {
	const classes = useStyles();
	const [names] = useState([
		{
			name: 'Иван Ургант',
			bitrhPlace: 'Минск'
		},
		{
			name: 'Гарик Варламов',
			bitrhPlace: 'Киев'
		},
		{
			name: 'Билл Мюррей',
			bitrhPlace: 'Минск'
		},
		{
			name: 'Милл Бюррей',
			bitrhPlace: 'Киев'
		},
		{
			name: 'Серега Васек',
			bitrhPlace: 'Москва'
		}
	]);
	const [searchProps, setSearchProps] = useState(['','name']);
	const [searchValue,searchBy] = searchProps;
	const filterName = (items, searchValue) => {
		if (searchValue.lenght === 0) {
			return items
		}
		return items.filter(item => {
			if (item[searchBy].toLowerCase().includes(searchValue.toLowerCase())) {
				return item
			}
		})
	}

	const changeListFilterValue = (newSearchProps) => {
		setSearchProps(newSearchProps)
	}

	const renderNameList = filterName(names, searchValue);
	const namesList = renderNameList.map((item,index) => {
		return (
			<ArchitectItem data={item} key={index}/>
		)
	})
	return (
		<List className={classes.root}>
			<SearchInput
				changeListFilterValue={changeListFilterValue} />
			{namesList}
		</List>
	)
};